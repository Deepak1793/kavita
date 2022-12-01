package ArrayList;

import java.util.ArrayList;

public class List {

    public static void main(String[] args) {
        ArrayList<Integer> l1 = new ArrayList<>();
        ArrayList<Integer> l2 = new ArrayList<>(5);
        ArrayList<Integer> l3 = new ArrayList<>(5);
        l3.add(10);
        l3.add(14);
        l3.add(18);
//
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
        l1.add(4, 7);
        l1.add(2, 8);
        l1.addAll(0,l2);
        l1.addAll(l3);
        System.out.println(l1.contains(45));
        System.out.println(l2.equals(l3));
        System.out.println(l1.indexOf(18));
        System.out.println(l1.lastIndexOf(18));
        for (int i=0; i<l1.size(); i++){
            System.out.print(l1.get(i));
            System.out.print(" ");
        }

    }
}
