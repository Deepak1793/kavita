package Map;

import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class Sorting {
    public static void main(String[] args) {
        Map<Integer,String> hashMap = new HashMap<>();
        hashMap.put(10,"Mango");
        hashMap.put(20,"Grapes");
        hashMap.put(30,"Banana");
        hashMap.forEach((k,v)-> System.out.println(k+v));
        // in random order so use treemap, convert in treemap
        Map<Integer,String> treeMap = new TreeMap<>();
        treeMap.putAll(hashMap);
        treeMap.forEach((k,v)-> System.out.println(k+v));


    }
}
