Require Import ZArith.
Require Import List.
Require Import Coq.Strings.Byte.
Import ListNotations.
Import ByteNotations.
Open Scope list_scope.
Open Scope nat_scope.
Open Scope bool_scope.

(* 
    DOUBLE EQUIVALENCE EXAMPLE
*)

Definition double_simple (n : nat) : nat :=
    2 * n.

Compute double_simple 50.
Compute double_simple 0.
Compute double_simple 37.

Fixpoint double_recursive (n : nat) : nat :=
    match n with 
    | O => 0
    | S n' => S (S (double_recursive n'))
    end.

Compute double_simple 50.
Compute double_simple 0.
Compute double_simple 37.

Theorem double_simple_recursive_equivalence : forall (n : nat),
    double_simple n = double_recursive n.
Proof.
    intros. induction n. reflexivity.
    simpl. rewrite <- IHn. 
    unfold double_simple. rewrite <- mult_n_Sm.
    replace (S (2 * n)) with (2 * n + 1) by (rewrite Nat.add_1_r; reflexivity).
    symmetry. apply plus_n_Sm.
Qed. 

(* 
    MEMORY ACCESS EXAMPLE
    ---------------------
*)

(* Implementation of a simple memory architecture *)
Definition memory_space : Type := 
    (* size, memory map *)
    (nat * (nat -> (nat * byte))).

Definition mem_size (m : memory_space) := fst m.

Definition empty_memory_space (size : nat) : memory_space := 
    (size, fun addr => (addr mod size, x00)).

Compute empty_memory_space 64.

Definition kilobyte_ram := empty_memory_space 1024.

(* Accessing raw memory, a necessessity of the Von Neumann model *)
Definition raw_mem_read (space : memory_space) (address : nat) : (nat * byte) :=
    (snd space) (address mod (mem_size space)).

(* Writing to raw memory, also a necessity *)
Definition raw_mem_write (space : memory_space) (address : nat) (new_data : byte) : memory_space :=
    (mem_size space, fun x => if address mod (mem_size space) =? x then (address mod (mem_size space), new_data) else (raw_mem_read space x)).

Fixpoint list_of_memory_size mem_size mem_func : list (nat * byte) :=
    match mem_size with 
    | O => nil
    | S n' => (raw_mem_read (mem_size, mem_func) n') :: (list_of_memory_size n' mem_func)
    end.

(*
    Bytes print out in hex
    e.g. x11 = 0x11 = 17_10
*)
Definition print_mem m := match m with (s, mem) => rev (list_of_memory_size s mem) end.

(* Example of raw memory read/write *)
Definition tiny_ram := empty_memory_space 8.
Definition overwritten_ram := raw_mem_write tiny_ram 7 x10.
Compute print_mem overwritten_ram.
Compute raw_mem_read overwritten_ram 7.

(* Overflows exist at the binary level! *)
Definition overflow_tiny_ram := raw_mem_write tiny_ram 333 x09.
Compute print_mem overflow_tiny_ram.
Compute raw_mem_read overflow_tiny_ram 21.

(* Implementation of a simple array structure *)
Definition array : Type := 
    (* Container space * address * size *)
    (memory_space * nat * nat).

Definition _space (a : array) : memory_space := fst (fst a).
Definition _addr  (a : array) : nat := snd (fst a).
Definition _size  (a : array) : nat := snd a.

(* Unsafe array access *)
Definition array_access (arr : array) (position : nat) : (nat * byte) :=
    match arr with 
    | (space, address, _) => raw_mem_read space (address + position)
    end.

Definition read_subarray (arr : array) (position length : nat) :=
    List.map (array_access arr) (seq position length).

(* Unsafe array write *)
Definition array_write (arr : array) (address : nat) (new_data : byte) : array :=
    match arr with
    | (space, arr_loc, size) => 
        ((raw_mem_write space (arr_loc + address) new_data), arr_loc, size)
    end.

Definition write_subarray (arr : array) (position : nat) (data : list byte) : array :=
    fst (List.fold_left ( fun (acc : array * nat) (item : byte) =>
        (array_write (fst acc) (snd acc) item, (snd acc + 1))
    ) data (arr, 0)).

Definition print_arr (arr : array) : list (nat * byte) :=
    match arr with 
    | (_, _, size) => read_subarray arr 0 size
    end.

(* 
    Let's store some secret data in 
    the first few bytes of RAM 
*)
Definition tiny_ram_with_secrets := 
    raw_mem_write (raw_mem_write (raw_mem_write tiny_ram 0 x01) 1 x02) 2 x03.

Compute print_mem tiny_ram_with_secrets.

(*  
    Let's say that a programmer creates this 
    array in memory, and does some operations on it
*)
Definition tiny_array  := (tiny_ram_with_secrets, 5, 3).
Definition tiny_array' := write_subarray tiny_array 0 [x09; x0a; x0b].
Compute print_arr tiny_array'.

(*
    This is what our memory space looks like now.
    We can see that the secret memory (low) exists in the same space as
    our user data (high). 

    This is normal, that's just how computers work. Virtual memory tries
    to avoid this, but there's only so much it can do. At the hardware level,
    it's all just bits.

    And sometimes, your program will have a set of confidential information,
    alongside non-confidential information in the same virtual memory space!
    At that point, there's nothing stopping an erroneous read from accessing
    memory that it shouldn't, and revealing it.
*)
Definition print_arr_mem arr := print_mem (_space arr).
Compute print_arr_mem tiny_array'.

(*
    Now let's imagine our programmer wants to access some data.
    But as a human, they make mistakes! So they accidentally cause
    the following memory errors to occur:
*)
(* Read from tiny_array' starting at position 3 for 3 bytes *)
Compute read_subarray tiny_array' 3 3.
(* Write [7, 7, 7, 7, 7, 7] to tiny_array' at position 0 *)
Compute print_arr_mem (write_subarray tiny_array' 0 [x07; x07; x07; x07; x07; x07]).

(*
    Woah! We just managed to read secret data outside of our array!
    And then we overwrote it with user data! That's bad!
    If only our programmer had written a safe array access routine.
    Why don't we write one?
*)

(* Safe array access *)
Definition array_access_safe (arr : array) (position : nat) : (nat * byte) :=
    match arr with 
    | (space, address, size) => raw_mem_read space (address + (position mod size))
    end.

Definition read_subarray_safe (arr : array) (position length : nat) :=
    List.map (array_access_safe arr) (seq position length).

(* Unsafe array write *)
Definition array_write_safe (arr : array) (address : nat) (new_data : byte) : array :=
    match arr with
    | (space, arr_loc, size) => 
        ((raw_mem_write space (arr_loc + (address mod size)) new_data), arr_loc, size)
    end.

Definition write_subarray_safe (arr : array) (position : nat) (data : list byte) : array :=
    fst (List.fold_left ( fun (acc : array * nat) (item : byte) =>
        (array_write_safe (fst acc) (snd acc) item, (snd acc + 1))
    ) data (arr, 0)).

(* 
    Let's now imagine our programmer wrote a safer routine,
    or maybe is using a language that uses arrays more safely
*)
Definition tiny_array''  := (tiny_ram_with_secrets, 5, 3).
Definition tiny_array''' := write_subarray_safe tiny_array 0 [x09; x0a; x0b].
Compute print_arr tiny_array'''.

(*
    Our memory space is still the same as it was before the unsafe reads/writes:
*)
Compute print_arr_mem tiny_array'''.

(*
    Now let's do the safe counterparts of those access operations
*)
Compute read_subarray_safe tiny_array' 3 3.
Compute print_arr_mem (write_subarray_safe tiny_array' 0 [x07; x07; x07; x07; x07; x07]).

(*
    Wow! We've prevented read/write access to data outside of the array bounds,
    and in doing so have protected the secrets that were adjacent in memory!

    Let's try and prove that this will never perform out-of-bounds reads:
*)

(*
    Part of our correctness/security property for array_access_safe
*)
Definition in_arr_bounds (arr : array) position : Prop :=
    (_addr arr) <= position /\ 
    position < (_addr arr) + (_size arr).

Theorem safety_of_array_access_safe : 
    forall arr position
        (SPACE_HAS_SIZE : 0 < mem_size (_space arr))
        (ARR_HAS_SIZE : 0 < _size arr)
        (ARR_STARTS_WITHIN_BOUNDS : 0 <= _addr arr + _size arr < mem_size (_space arr))
        (ARR_MAX_LEN : _size arr <= mem_size (_space arr) - _addr arr)
        (SPACE_INDICES : forall n : nat, fst (raw_mem_read (_space arr) n) = n),
    in_arr_bounds arr (fst (array_access_safe arr position)).
Proof.
    intros. 
    destruct arr as [[space arr_addr] arr_size].
    destruct space as [space_size space_func]. simpl in *.
    destruct ARR_STARTS_WITHIN_BOUNDS as [ARRLOWERBOUND ARRUPPERBOUND].
    unfold in_arr_bounds, _addr, _space in *. simpl in *.
    split. rewrite SPACE_INDICES. apply Nat.le_add_r.
    rewrite SPACE_INDICES. apply -> Nat.add_lt_mono_l. 
    apply Nat.mod_upper_bound, not_eq_sym, Nat.lt_neq. assumption.
Qed.

Lemma eqb_impl_eq:
    forall n m,
    n =? m = true -> n = m.
Proof.
    induction n; intros.
    - inversion H. destruct m. reflexivity. inversion H1.
    - simpl in H. destruct m. inversion H. apply eq_S. apply IHn. assumption.
Qed.

(*
    Now let's try to prove that this will never perform out-of-bounds writes:
    If we write to an array called "arr" and get a new one called "arr'",
    then every element different between the spaces of arr and arr' is within
    the bounds of the array
*)

Theorem safety_of_array_write_safe:
    forall i arr arr' position data
    (ARR' : arr' = array_write_safe arr position data)
    (SIZE: i < mem_size (_space arr))
    (ARR_STARTS_WITHIN_BOUNDS : 0 <= _addr arr + _size arr < mem_size (_space arr))
    (ARR_MAX_LEN : _size arr <= mem_size (_space arr) - _addr arr)
    (SPACE_INDICES : forall n : nat, fst (raw_mem_read (_space arr) n) = n)
    (SPACE_HAS_SIZE: 0 < mem_size (_space arr)),
    ((raw_mem_read (_space arr) i <> raw_mem_read (_space arr') i) 
        -> in_arr_bounds arr i).
Proof.
    intros.
    destruct arr as [[space arr_addr] arr_size].
    destruct arr' as [[space' arr'_addr] arr'_size].
    destruct space as [space_size space_func].
    destruct space' as [space'_size space'_func]. 
    simpl in *.
    unfold in_arr_bounds, raw_mem_read, raw_mem_write, _space, _addr, _size in *.
    simpl in *. inversion ARR'. clear ARR'. subst.
    split. admit.
    destruct ((arr_addr + position mod arr_size) mod space_size =? i mod space_size) eqn:E.
    apply eqb_impl_eq in E. rewrite E in H.
    destruct space_func eqn:E1. assert (n = fst (space_func (i mod space_size))). {
    destruct space_func. inversion E1. reflexivity.
    } rewrite SPACE_INDICES in H0. subst.
    admit.
    rewrite Nat.mod_mod in H. contradict H. reflexivity.
    apply not_eq_sym, Nat.lt_neq. assumption.
Admitted.

(* This one is hard to prove... 
   It's provable but I'm a busy student.

   Let's prove an easier version!
*)

(* Writing to raw memory, also a necessity *)
Definition raw_mem_write' (space : memory_space) (address : nat) (new_data : byte) : nat * memory_space :=
    (* We now return the raw address that was written to *)
    (address mod (mem_size space), 
    (mem_size space, fun x => if address mod (mem_size space) =? x then (address mod (mem_size space), new_data) else (raw_mem_read space x))).

Definition array_write_safe' (arr : array) (address : nat) (new_data : byte) : nat * array :=
    match arr with
    | (space, arr_loc, size) => 
        match raw_mem_write' space (arr_loc + (address mod size)) new_data with 
        (* Return the modified position *)
        | (edited_pos, new_space) => (edited_pos, (new_space, arr_loc, size))
        end
    end.

(* Proof by exhaustion *)
Lemma mod_small_big:
    forall a b c d,
    (a + b mod c) mod d < c.
Admitted.

(* Proof by exhaustion *)
Lemma le_mod:
    forall a b n,
    a <= b -> b < n -> a <= b mod n.
Admitted.

Theorem safety_of_array_write_safe':
    forall arr arr' position edited_pos data
    (ARR' : (edited_pos, arr') = array_write_safe' arr position data)
    (ARR_STARTS_WITHIN_BOUNDS : 0 <= _addr arr + _size arr < mem_size (_space arr))
    (ARR_MAX_LEN : _size arr <= mem_size (_space arr) - _addr arr)
    (ARR_SMALLER_SPACE: _size arr < mem_size (_space arr))
    (SPACE_INDICES : forall n : nat, fst (raw_mem_read (_space arr) n) = n)
    (SPACE_HAS_SIZE: 0 < mem_size (_space arr))
    (ARR_HAS_SIZE: 0 < _size arr),
    in_arr_bounds arr edited_pos.
Proof.
    intros.
    destruct arr as [[space arr_addr] arr_size].
    destruct arr' as [[space' arr'_addr] arr'_size].
    destruct space as [space_size space_func].
    destruct space' as [space'_size space'_func]. 
    simpl in *.
    unfold in_arr_bounds, raw_mem_read, raw_mem_write, _space, _addr, _size in *.
    simpl in *. inversion ARR'. clear ARR'. subst.
    split. destruct ARR_STARTS_WITHIN_BOUNDS.
    apply le_mod. apply Nat.le_add_r.
    apply Nat.lt_trans with (m := arr_addr + arr_size).
    apply Nat.add_lt_mono_l. apply Nat.mod_upper_bound, not_eq_sym, Nat.lt_neq. assumption.
    assumption.
    rewrite (Nat.add_comm arr_addr arr_size). apply Nat.lt_lt_add_r.
    apply mod_small_big.
Qed.

