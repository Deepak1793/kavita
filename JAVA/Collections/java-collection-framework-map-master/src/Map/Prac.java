package Map;

import java.util.HashMap;
import java.util.Map;

public class Prac {
    public static void main(String[] args) {
        HashMap m = new HashMap();
//        Map<Integer,String> map = new HashMap<>();
        //to add pairs

        m.put(101,"Kajal");
        m.put(102,"Kavitha");
        m.put(103,"Jyoti");
        m.put(104,"Naman");
        m.put(105,"Ankur");
        m.put(103,"Mala");
        m.put(106,"Lalit");

        System.out.println(m);
        //to get values
        System.out.println(m.get(105));
        System.out.println(m.get(103));//value replaced
        //to remove
        System.out.println(m.remove(106));
        System.out.println(m);
        //to check keys and values
        System.out.println(m.containsKey(104));
        System.out.println(m.containsKey(110));
        System.out.println(m.containsValue("X"));
        System.out.println(m.containsValue("Kajal"));
        //size
        System.out.println("Size is " + m.size());
        //empty
        System.out.println(m.isEmpty());
        //keyset
        System.out.println(m.keySet());
        for (Object i:m.keySet()){
            System.out.println(i);
        }
        //values

        System.out.println(m.values());
        for (Object i:m.values()){
            System.out.println(i);
        }
        //entryset
        System.out.println(m.entrySet());


    }
}
