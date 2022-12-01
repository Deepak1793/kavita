package Map;

import java.util.HashMap;
import java.util.Map;

public class HashmapEx {
    public static void main(String[] args) {
        Map<String,Integer> numbers = new HashMap<>();
        numbers.put("mango",1);
        numbers.put("apple",2);
        numbers.put("banana",3); //not coming in sequence

        System.out.println(numbers);
        System.out.println(numbers.keySet()); //return as set as no duplicates
        System.out.println(numbers.values()); // return as collection as duplicates allowed
        System.out.println(numbers.entrySet()); //return type is set

    }
}
