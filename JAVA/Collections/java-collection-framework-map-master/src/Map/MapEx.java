package Map;


import java.util.HashMap;
import java.util.Map;

public class MapEx {
    public static void main(String[] args) {
        Map<Integer,String> map = new HashMap<>();
        //put elements in map
        map.put(1,"Mango");
        map.put(2,"Apple");
        map.put(3,"Banana");
        map.put(4,"Grapes");
        map.put(4,"Melon"); //overriding key value, not allowed duplicate keys
        System.out.println(map);
        //to check key exists, use contains key & contains value that returns boolean
        System.out.println(map.containsKey(4));
        System.out.println(map.containsKey(5));
        System.out.println(map.containsValue("Apple"));
        System.out.println(map.containsValue("Litchi"));
        //get method
        String value=map.get(4);
        System.out.println(value);
        //to remove key
        System.out.println(map.remove(2));
        System.out.println(map.remove(2)); //again try so gives null
        System.out.println(map); //check key 2 removed
         //data cleared
//        map.clear();
//        System.out.println(map);
        //size
        int size= map.size();
        System.out.println(size);

        //whether empty or not

        boolean isEmpty = map.isEmpty();
        System.out.println(isEmpty);





    }




}
