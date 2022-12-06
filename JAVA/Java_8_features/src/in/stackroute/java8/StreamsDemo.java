package in.stackroute.java8;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamsDemo {
    public static void main(String[] args) {
        List<String> newProducts = new ArrayList<>(List.of("Mobile", "Computer", "Jeans", "T-shirt", "Mouse","pen","Pencil","paper","Perfume","pen","Pencil"));

//        newProducts.forEach(item->{
//            if(item.startsWith("P")){
//                System.out.println(item);
//            }
//        });

//        newProducts.forEach(item->{
//            if(item.toUpperCase().startsWith("P")){
//                System.out.println(item);
//            }
//        });

//        System.out.println(newProducts
//                .stream()
//                .map(ele -> ele.toUpperCase())
//                .filter(prod -> prod.startsWith("P"))
////                .peek(item-> System.out.println(item))
//                .sorted()
//                .distinct()
//                .peek(item-> System.out.println(item))
//                //                .forEach(item-> System.out.println(item));
//                .count());

      List<String> newData= newProducts
                .stream()
                .map(ele -> ele.toUpperCase())
              .peek(item-> System.out.println(item))
                .filter(prod -> prod.startsWith("P"))
//                .peek(item-> System.out.println(item))
                .sorted()
                .distinct()
                .peek(item-> System.out.println(item))
                //                .forEach(item-> System.out.println(item));
//                .count()
               .collect(Collectors.toList());



        System.out.println(newData);


        Stream<String> bollywoodActors = Stream.of("Salman","Sharuk","Hritik");
        bollywoodActors.forEach(item-> System.out.println(item));

        Stream<String> sandalWoodActors = Stream.of("Rajkumar", "PRK", "Yash");
        Stream<String> actor = Stream.concat(bollywoodActors, sandalWoodActors);




    }
}
