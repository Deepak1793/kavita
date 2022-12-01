package in.stackroute.collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ProductSort1 {
    public static void main(String[] args) {
        Product tooth_paste = new Product("Tooth paste", 120, 3);
        Product soap = new Product("Soap", 60, 4);
        Product note_book = new Product("Note Book", 50, 2);

       List<Product> productList = new ArrayList<>();
       productList.add(tooth_paste);
       productList.add(soap);
       productList.add(note_book);

        System.out.println("Before sort--------------------");
        System.out.println(productList);

        System.out.println("After sort------------------------");
       Collections.sort(productList);
        System.out.println(productList);




    }
}
