package in.stackroute.collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class GenericsDemo {
    public static void main(String[] args) {
        List<Integer> al1 = new ArrayList<>();
        al1.add(20);
        al1.add(50);
        al1.add(15);
        al1.add(2);

        System.out.println(al1);

        Collections.sort(al1);
        System.out.println("After sorting");
        System.out.println(al1);


    }
}
