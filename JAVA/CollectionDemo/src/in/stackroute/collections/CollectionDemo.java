package in.stackroute.collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CollectionDemo {
    public static void main(String[] args) {
        List data = new ArrayList();

        data.add(12);
        data.add(20);
        data.add(20.0);
        data.add("Array List");
        data.add(true);
        data.add('A');

        System.out.println(data);

//        Collections.sort(data);
        Object name = data.get(3);
        System.out.println(((String) name).length());

        Object name1 = data.get(2);
        System.out.println(((String) name1).length());




    }
}
