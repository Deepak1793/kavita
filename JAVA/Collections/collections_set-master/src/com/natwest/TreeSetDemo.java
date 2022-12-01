package com.natwest;


import java.util.TreeSet;

public class TreeSetDemo {
    public static void main(String[] args) {
        TreeSet<Integer> odd = new TreeSet<>();
        odd.add(3);
        odd.add(7);
        odd.add(5);
        odd.add(11);
        odd.add(9);

        System.out.println(odd);               // output will be in ascending order

        System.out.println(odd.first());       // output will be first element

        System.out.println(odd.last());        // output will be last element

        System.out.println(odd.higher(9));  // output will be next higher element

        System.out.println(odd.lower(11));  // output will be next lower element

        System.out.println(odd.clone());       // will create a copy of collection elements

        System.out.println(odd.ceiling(9)); // output will be the least element in this set greater than or equal to the given element, or null if there is no such element.

        System.out.println(odd.floor(12));  // output will be the greatest element in this set less than or equal to the given element, or null if there is no such element.




    }
}
