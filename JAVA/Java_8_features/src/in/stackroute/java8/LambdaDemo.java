package in.stackroute.java8;

import java.util.*;
import java.util.function.Consumer;
import java.util.function.Predicate;

public class LambdaDemo {
    public static void main(String[] args) {
        List<String> products = List.of("Mobile", "Computer", "Jeans", "T-shirt", "Mouse");//immutable list
          Consumer<String> display= prod-> System.out.println(prod);
        products.forEach(display);

        //To sort the product that is starting with M
        System.out.println("Displaying product starting with M");
        Consumer<String> display2 = temp ->{
            if(temp.startsWith("M")){
                System.out.println(temp);
            }
        };

        products.forEach(display2);
        System.out.println("************************************************");

        //To add the products that are starting with M to the new ArraryList

       List<String> mProducts = new ArrayList<>();

       Consumer<String> addToList = prod ->{
           if(prod.startsWith("M")){
               mProducts.add(prod);
           }
       };

       products.forEach(addToList);

        System.out.println(mProducts);

        mProducts.forEach(lalit-> System.out.println(lalit));


        // To sort the products

//        Collections.sort();
        System.out.println("********** Sorting the Products*****************");

        List<String> newProducts = new ArrayList<>(List.of("Mobile", "Computer", "Jeans", "T-shirt", "Mouse"));

        Comparator<String> asecProducts=(prod1, prod2)->prod1.compareTo(prod2);

        newProducts.sort(asecProducts);
        System.out.println(newProducts);

        System.out.println("**************Sorting products based on length******************");

        //Sorting the product based on the length of the product/characters
        Comparator<String> length = (prod1,prod2)-> prod1.length()>prod2.length()?1:prod1.length()<prod2.length()?-1:0;

        newProducts.sort(length);
        System.out.println(newProducts);

        // Example for predicate
        System.out.println("****************Removing product of 5 character*****************");
        Predicate<String> productOf5Characters= prod-> prod.length()==5;
        newProducts.removeIf(productOf5Characters);
        System.out.println(newProducts);

        //Biconsumer example

        Map<String,Integer> scores = Map.of("Dhoni",50,"Virat",55);
        scores.forEach((key,value)->{
            System.out.println(key+" "+value);
        });
    }
}
