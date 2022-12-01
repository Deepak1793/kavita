package ArrayList;

import java.util.LinkedList;

public class Linked {

    public static void main(String[] args) {
        LinkedList<Integer> l1 = new LinkedList<>();
        LinkedList<Integer> l2 = new LinkedList<>();
        LinkedList<Integer> l3 = new LinkedList<>();
        l3.add(10);
        l3.add(14);
        l3.add(18);

        l2.add(10);
        l2.add(14);
        l2.add(18);

        l1.add(1);
        l1.add(2);
        l1.add(3);
        l1.add(4);
        l1.add(5);
        l1.add(6);
        l1.add(7);
        l1.addLast(70);
        l1.addFirst(50);
        l1.add(2, 7);
        l1.add(8);
        l1.addAll(2, l2);
        l1.addAll(l3);
        System.out.println(l1.contains(5));
        System.out.println(l2.equals(l3));
        System.out.println(l1.indexOf(18));
        System.out.println(l1.lastIndexOf(18));
        for (int i=0; i<l1.size(); i++){
            System.out.print(l1.get(i));
            System.out.print(" ");
        }
    }
}


