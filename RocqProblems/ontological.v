(* Formalization of Godel's ontological proof
   https://en.wikipedia.org/wiki/G%C3%B6del%27s_ontological_proof *)

From Stdlib Require Import Classical.

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
  intros Himpl HQ1 w.
  apply Himpl, HQ1.
Qed.

Lemma impl_intro (Q1 Q2 : prop) :
  (forall w, Q1 w -> Q2 w) ->
  ⌊ Q1 ⇒ Q2 ⌋.
Proof.
  intros Himpl w HQ1. apply Himpl, HQ1.
Qed.

Lemma valid_impl_at (Q1 Q2 : prop) (w : world) :
  ⌊ Q1 ⇒ Q2 ⌋ -> Q1 w -> Q2 w.
Proof.
  intros H HQ1. exact (H w HQ1).
Qed.

Lemma and_intro (Q1 Q2 : prop) (w : world) :
  Q1 w -> Q2 w -> (Q1 ∧ Q2) w.
Proof.
  intros H1 H2. split; assumption.
Qed.

(* Theorem 1: if phi is positive then it is possible
   that there exists some object satisfying phi. *)
Theorem thm1 (phi : intension) :
  ⌊ P phi ⇒ ◇ exists_obj phi ⌋.
Proof.
  apply impl_intro. intros w Hphi.
  unfold possible, exists_obj.
  edestruct classic; [eassumption|exfalso].
  assert ⌊ □(forall_obj (fun x => phi x ⇒ (fun y => ¬ phi y) x)) ⌋. {
    intros w' v x Hphi'. exfalso.
    apply H. exists v, x. apply Hphi'.
  } pose proof (Ax1 phi (fun x => ¬ phi x)) as Contra.
  assert (P (fun x => ¬ phi x) w) as Hneg. {
    eapply valid_impl_at. apply Contra.
    apply and_intro. assumption. apply H0.
  } pose proof (Ax2 phi w) as (HC1 & HC2).
  now apply HC1.
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
Proof.
  eapply impl_destr.
    apply thm1.
    assumption.
Qed.

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
  apply impl_intro. intros w HG.
  unfold essential. apply and_intro.
    assumption.
  intros psi Hpsi.
  assert (P psi w). {
    edestruct classic; [eassumption|exfalso].
    pose proof (Ax2 psi w) as (HC1 & HC2).
    specialize (HC2 H).
    unfold "G" in HG. specialize (HG _ HC2).
    simpl in HG. contradiction.
  }
  intros v y HGy. specialize (HGy psi).
  specialize (Ax4 psi w H v). apply HGy, Ax4.
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
  assert ⌊ (◇ exists_obj G) ⇒ □ exists_obj G⌋. {
    apply impl_intro. intros v HGv.
    destruct HGv as (u & x & Hx).
    pose proof (thm3 _ _ Hx) as Hess.
    pose proof (Hx _ (Ax5 u)) as Hexn.
    apply Hexn, Hess.
  } eapply impl_destr. apply H.
  eapply impl_destr. apply thm1.
  apply Ax3.
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
  apply impl_intro. intros w HQ v.
  destruct (thm4 w w) as (x & Gx).
  destruct (thm4 v v) as (x' & Gx').
  pose proof (thm3 _ _ Gx) as Hess.
  unfold "ess" in Hess. destruct Hess as (_ & ?).
  specialize (H (fun _ => Q) HQ v x'). simpl in H.
  apply H. apply Gx'.
Qed.

(* If Q is true in one world, it is true in all of them *)
Theorem modal_collapse' (Q : prop) :
  ⌊ (◇ Q) ⇒ □ Q ⌋.
Proof.
  apply impl_intro. intros w HQ.
  destruct HQ as (u & HQu).
  exact (modal_collapse Q u HQu).
Qed.

End Ontological.
