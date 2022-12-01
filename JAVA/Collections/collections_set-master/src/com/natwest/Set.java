package com.natwest;

import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;

//Set is an interface and child of collection interface.

//HashSet, LinkedHashSet and TreeSet are child of Set.

//* HashSet
//  1. Insertion will not be in order or unordered collection
//  2. Can not store duplicate objects
//  3. Can not sort and shuffle
//  4. Name of the Internal Data Structure is Hashing.


//*Collections- Collection is a group of objects. -----> example - collection of employees
// Single entity which is representing multiple objects.

//* Collection Interface- It defines the different interfaces and classes by which
// we can represent group of objects in a collection.

public class Set {
    public static void main(String[] args) {
//        HashSet<Integer> number = new HashSet<>(16,0.75f);
        HashSet<String> name = new HashSet<>();
        name.add("Java");
        System.out.println(name);
        HashSet<Integer> number = new HashSet<>();
        number.add(11);
        number.add(11);
        number.add(3);
        number.add(17);
        number.add(4);
        number.add(5);
        System.out.println(number);

// using this can read the all objects, can also use for
        Iterator<Integer> iterator = number.iterator();
        while (iterator.hasNext()){
            System.out.println(iterator.next());

        }

        System.out.println(number.isEmpty());         // will check empty or not

        System.out.println(number.remove(4));      // it's an unordered collection, so we can not provide index value,
                                                     // instead we can direct input object value

        System.out.println(number.removeAll(number)); // will remove all objects and return true/false

        System.out.println(number.contains(5)); // will check that objects present or not

        System.out.println(number);


        HashSet<Integer> number1 = new HashSet<>();
        number1.add(11);
        number1.add(9);
        System.out.println(number1);
        number1.addAll(number);
        System.out.println(number1);

//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------

        // *LinkedHashSet
        // 1. Insertion will be in order

        LinkedHashSet<Integer> evenNumber = new LinkedHashSet<>();                  // Syntax of LinkedHASHSET
        evenNumber.add (2);                                                          // .add ; .remove  and  . contains functions are used
        evenNumber.add (4);
        evenNumber.add (6);                                                             // dUPLICATES ARE NOT ALLOWED
        evenNumber.add (6);
        evenNumber.add (20);
        evenNumber.add (10);


        System.out.println(evenNumber.contains(20));                                /// contains method used here


        System.out.println("The Linked Hashset is :-> " + evenNumber);
        System.out.println("The size of Set is :-> "  + evenNumber.size());         /// size will still remain as 3 because duplicates are not allowed in HashSet

        LinkedHashSet<Integer> numbers3 = new LinkedHashSet<>();
        numbers3.addAll (evenNumber);                                                     /// all the element in the set using HashSet
        numbers3.add (5);                                                                //// 5 element is added in the set
        System.out.println("Number 5 added in the set : " + numbers3);

        numbers3.remove(6);                                                           ///// 6 element is added in the set
        System.out.println("Number 6 is removed from set :-> "  + numbers3);


        numbers3.contains(5);                                                            //// contains is used here
        System.out.println("Now after adding and removing, the set is :-> " + numbers3);


        numbers3.containsAll(numbers3);
        System.out.println(numbers3);

        Iterator<Integer> iterator1 = numbers3.iterator();                                                //// Access the item of HashSet, we use Iterator
        while (iterator1.hasNext()) {                                                                      //// (returns true or false) has next will go till the last item in the set and then stop
            System.out.println("All the items of SET are displayed one by one" + iterator1.next());         //// displayed the items of the set
        }

        boolean value1 = numbers3.remove(5);                 ///// removes one element from the set

        System.out.println("5 is removed from the set : -> " + numbers3);
        System.out.println(value1);
        boolean value2 = numbers3.removeAll(numbers3);
        System.out.println(value2);
        System.out.println(numbers3);
    }
}
