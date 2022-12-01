package Map;

import java.util.HashMap;
import java.util.Map;

public class MapIteration {
    public static void main(String[] args) {
        Map<Integer,String> map = new HashMap<>();
        map.put(1,"Mango");
        map.put(2,"Apple");
        map.put(3,"Banana");
        map.put(4,"Grapes");
        map.put(4,"Melon");
        System.out.println(map);
        for (Map.Entry entry:map.entrySet()){
            System.out.println(entry.getValue());
        }
        map.forEach((k,v)-> System.out.println(k+v));

    }
}
