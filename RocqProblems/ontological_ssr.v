(* Formalization of Godel's ontological proof
   https://en.wikipedia.org/wiki/G%C3%B6del%27s_ontological_proof *)

From Stdlib Require Import Classical.
From Corelib Require Import ssreflect.
Set Implicit Arguments.
Unset Strict Implicit.
Unset Printing Implicit Defensive.

Section Ontological.

(** Properties of worlds *)
Parameter world : Type.
Parameter obj   : Type.

Definition prop : Type :=
  world -> Prop.
Definition intension : Type :=
  obj -> prop.

Definition negate (Q : prop) : prop :=
  fun (w : world) => ~ Q w.
Notation "¬ Q" := (negate Q) (at level 40).

Definition prop_and (Q1 Q2 : prop) : prop :=
  fun (w : world) => Q1 w /\ Q2 w.
Infix "∧" := (prop_and) (at level 30).

Definition prop_impl (Q1 Q2 : prop) : prop :=
  fun (w : world) => Q1 w -> Q2 w.
Infix "⇒" := (prop_impl) (at level 35).

Definition prop_iff (Q1 Q2 : prop) : prop :=
  fun (w : world) => Q1 w <-> Q2 w.
Infix "⇔" := (prop_iff) (at level 36).

(** Modal operators *)
Definition possible (Q : prop) : prop :=
  fun (w : world) => exists (v : world), Q v.
Notation "'◇' Q" := (possible Q) (at level 50).

Definition necessary (Q : prop) : prop :=
  fun (w : world) => forall (v : world), Q v.
Notation "'□' Q" := (necessary Q) (at level 50).

Definition valid (Q : prop) : Prop :=
  forall (w : world), Q w.
Notation "'⌊' Q '⌋'" := (valid Q) (at level 0).

(* object-level quantifiers *)
Definition forall_obj (F : intension) : prop :=
  fun (w : world) => forall (x : obj), F x w.
Definition exists_obj (F : intension) : prop :=
  fun (w : world) => exists (x : obj), F x w.

(** Proof *)
Parameter positive : intension -> prop.
Notation "'P' phi" := (positive phi) (at level 1).

(* Axiom 1: positiveness is closed under necessary entailment.
   If phi is positive and necessarily everything phi is psi, then psi
   is positive. *)
Hypothesis Ax1 : forall (phi psi : intension),
  ⌊ (P phi ∧ □(forall_obj (fun x => phi x ⇒ psi x))) ⇒ P psi ⌋.

(* Axiom 2: a property is positive iff its negation is not. *)
Hypothesis Ax2 : forall (phi : intension),
  ⌊ P (fun x => ¬ phi x) ⇔ (¬ P phi) ⌋.

Lemma impl_destr (Q1 Q2 : prop) :
  ⌊ Q1 ⇒ Q2 ⌋ ->
  ⌊ Q1 ⌋ ->
  ⌊ Q2 ⌋.
Proof.
  by move => Himpl HQ1 w; apply Himpl, HQ1.
Qed.

Lemma impl_intro (Q1 Q2 : prop) :
  (forall w, Q1 w -> Q2 w) ->
  ⌊ Q1 ⇒ Q2 ⌋.
Proof.
  by move => Himpl w HQ1; apply Himpl, HQ1.
Qed.

Lemma valid_impl_at (Q1 Q2 : prop) (w : world) :
  ⌊ Q1 ⇒ Q2 ⌋ -> Q1 w -> Q2 w.
Proof.
  by move => H HQ1; apply H.
Qed.

Lemma and_intro (Q1 Q2 : prop) (w : world) :
  Q1 w -> Q2 w -> (Q1 ∧ Q2) w.
Proof.
  by move => H1 H2; split.
Qed.

(* Theorem 1: if phi is positive then it is possible
   that there exists some object satisfying phi. *)
Theorem thm1 (phi : intension) :
  ⌊ P phi ⇒ ◇ exists_obj phi ⌋.
Proof.
  apply: impl_intro => w Hphi.
  rewrite /possible /exists_obj.
  case: (classic (exists v x, phi x v)) => [H|H]; first by [].
  exfalso.
  have Hbox : ⌊ □(forall_obj (fun x => phi x ⇒ (fun y => ¬ phi y) x)) ⌋.
    by move => w' v x Hphi'; exfalso; apply: H;
      exists v, x.
  have Contra := @Ax1 phi (fun x => ¬ phi x).
  have Hneg : P (fun x => ¬ phi x) w.
    by apply: (valid_impl_at Contra); apply: and_intro.
  have [HC1 _] := Ax2 phi w. by apply: HC1.
Qed.

(* Definition 1: x is godlike iff x has all positive properties. *)
Definition godlike : intension :=
  fun (x : obj) (w : world) =>
    forall (phi : intension), (P phi ⇒ phi x) w.
Notation "'G'" := (godlike) (at level 0).

(* Axiom 3: being godlike is a positive property. *)
Hypothesis Ax3 : ⌊ P G ⌋.

(* Theorem 2: It is possible that there exists a godlike object
   in some world. *)
Theorem thm2 : ⌊ ◇ exists_obj G ⌋.
Proof. by apply: impl_destr; [apply: thm1|]. Qed.

(* Definition 2: phi is an essential property of x iff
   x satisfies phi and all properties psi of x necessarily
   follow from phi. *)
Definition essential (phi : intension) (x : obj) : prop :=
  phi x ∧ (fun w =>
            forall psi, psi x w ->
            (□ forall_obj (fun y => phi y ⇒ psi y)) w).
Notation "x 'ess' y" := (essential x y) (at level 20).

(* Axiom 4: If phi is positive, then it is necessarily positive. *)
Hypothesis Ax4 : forall (phi : intension),
  ⌊ P phi ⇒ □ P phi ⌋.

(* Theorem 3: If x is godlike, then being godlike is an essential
   property of x. *)
Theorem thm3 (x : obj) :
  ⌊ G x ⇒ G ess x ⌋.
Proof.
  apply: impl_intro; move => w HG.
  rewrite /essential.
  apply: and_intro; [by []|]; move => psi Hpsi.
  have HP : P psi w.
    case (classic (P psi w)) => [H|H]; first by [].
    exfalso.
    have [HC1 HC2] := Ax2 psi w.
    by move: (HG _ (HC2 H)) => /= HGneg.
  move => v y HGy. apply HGy, (@Ax4 psi w HP).
Qed.

(* Definition 3: x exists necessarily if each of its essential
   properties applies to some object y in all worlds. *)
Definition exn : intension :=
  fun (x : obj) (w : world) =>
    forall (phi : intension),
      (phi ess x ⇒ □ exists_obj phi) w.
Notation "'E'" := (exn) (at level 0).

(* Axiom 5: necessary existence is a positive property *)
Hypothesis Ax5 : ⌊ P E ⌋.

(* Theorem 4: there necessarily exists a godlike object *)
Theorem thm4 : ⌊ □ exists_obj G ⌋.
Proof.
  have Himpl : ⌊ (◇ exists_obj G) ⇒ □ exists_obj G⌋.
    apply: impl_intro; move => v [u [x Hx]].
    by apply: (Hx _ (Ax5 u)); apply thm3.
  by apply: impl_destr; first by []; apply: impl_destr;
    first by apply: thm1.
Qed.

Print Assumptions thm4.
(*
Section Variables:
  Ax5 : ⌊ P E ⌋
  Ax4 : forall phi : intension,
          ⌊ P phi ⇒ (□ P phi) ⌋
  Ax3 : ⌊ P G ⌋
  Ax2 : forall phi : intension,
          ⌊ P (fun x : obj => ¬ phi x) ⇔ (¬ P phi) ⌋
  Ax1 : forall phi psi : intension,
        ⌊ P phi
          ∧ (□ forall_obj
                 (fun x : obj => phi x ⇒ psi x))
          ⇒ P psi ⌋
Axioms:
  world : Type
  positive : intension -> prop
  obj : Type
  classic : forall P : Prop, P \/ ~ P
*)

(* All true propositions are necessarily true *)
Theorem modal_collapse (Q : prop) :
  ⌊ Q ⇒ □ Q ⌋.
Proof.
  apply: impl_intro => w HQ v.
  have [x Gx]   := thm4 w w;
  have [x' Gx'] := thm4 v v.
  have [_ H] := thm3 Gx.
  by have := H (fun _ => Q) HQ v x' Gx'.
Qed.

(* If Q is true in one world, it is true in all of them *)
Theorem modal_collapse' (Q : prop) :
  ⌊ (◇ Q) ⇒ □ Q ⌋.
Proof.
  apply: impl_intro => w [u HQu].
  apply: @modal_collapse Q u HQu.
Qed.

End Ontological.
