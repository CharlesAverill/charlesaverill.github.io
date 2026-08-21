Section Omniscience.

(* Set of propositions *)
Parameter pset : Type.
Parameter in_set : Prop -> pset -> bool.
Notation "P ∈ S" := (in_set P S) (at level 50).

(* Undecidability *)
Parameter undecidable : Prop -> Prop.
(* An undecidable prop admits neither a proof nor a refutation. *)
Hypothesis undec_not_provable   : forall P, undecidable P -> ~ P.
Hypothesis undec_not_refutable  : forall P, undecidable P -> ~ ~ P.

(* S is the set containing only all the true statements. *)
Definition sSpec (S : pset) : Prop :=
    forall (P : Prop), P <-> P ∈ S = true.

(* If there exists an undecidable statement,
   then the set containing only all the 
   true statements cannot exist. *)
Theorem contradiction :
    (exists P, undecidable P) ->
    ~ (exists (S : pset), sSpec S).
Proof.
    intros (P & Und) (S & HS).
    destruct (HS P) as [Hf Hb].
    destruct (P ∈ S) eqn:E.
    - eapply undec_not_provable. eassumption. now apply Hb.
    - eapply undec_not_refutable. eassumption.
      intro Contra. now specialize (Hf Contra).
Qed.

Print Assumptions contradiction.
(*
Section Variables:
  undec_not_refutable
    : forall P : Prop, undecidable P -> ~ ~ P
  undec_not_provable
    : forall P : Prop, undecidable P -> ~ P
Axioms:
  undecidable : Prop -> Prop
  pset : Type
  in_set : Prop -> pset -> bool
*)

End Omniscience.