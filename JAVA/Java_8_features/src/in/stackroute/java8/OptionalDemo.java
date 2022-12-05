package in.stackroute.java8;

import java.util.Optional;

public class OptionalDemo {
    public static void main(String[] args) {
        String[] name = new String[5];
//        System.out.println(name.length);
//          name[4]="Actual value";
//        System.out.println(name[4]);
//        System.out.println(name[4].toUpperCase());

//        if(name[4]==null){
//
//        }

        Optional<String> test = Optional.ofNullable(name[4]);
//        System.out.println(test);
        if (test.isPresent()){
            String s = test.get().toUpperCase();
            System.out.println(s);

        }
        else{
            System.out.println("Data not found");
        }



    }
}
