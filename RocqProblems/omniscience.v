(* Abstract definition of a set of propositions *)
Module Type PropSet.
    (* a set of propositions *)
    Parameter pset : Type.

    (* a function determining if a pset contains a prop *)
    Parameter in_set : Prop -> pset -> bool.
    Notation "P ∈ S" := (in_set P S) (at level 50).
End PropSet.

Module Omniscience (PS : PropSet).
Include PS.

(* S is the set containing only all the true statements *)
Definition sSpec (S : pset) : Prop :=
    forall (P : Prop), P <-> P ∈ S = true.

(* proposition P is undecidable *)
Definition undecidable (P : Prop) : Prop :=
    ~ (P \/ ~ P).

(* if there exist undecidable statements,
   then the set containing only all the 
   true statements cannot exist *)
Theorem contradiction : 
    (exists P, undecidable P) -> 
    ~ (exists (S : pset), sSpec S).
Proof.
    intros (PC & Und) (S & Contra).
    specialize (Contra PC).
    destruct (PC ∈ S), Contra.
    specialize (H0 eq_refl).
        apply Und. now left.
    apply Und. right.
    intro PCT. specialize (H PCT). inversion H.
Qed.

End Omniscience.

(* An implementation of PropSet using boolean functions *)
Module PropSetBoolFunc : PropSet.
    Definition pset : Type := Prop -> bool.
    Definition in_set (P : Prop) (S : pset) : bool :=
        S P.
End PropSetBoolFunc.

(* Omniscience can be disproven with PropSets defined with
   boolean functions *)
Module Impl := Omniscience (PropSetBoolFunc).
Check Impl.contradiction.
