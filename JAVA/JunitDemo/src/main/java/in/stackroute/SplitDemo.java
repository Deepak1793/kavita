package in.stackroute;

import java.util.Arrays;

public class SplitDemo {
    public static void main(String[] args) {
        String s = "20/23from50/45////    ";
//        String split = s.split("from")[1].trim().split("/")[0].trim();

        //s.split("from")[1].trim()
        String[] split = s.split("from");
        String s1 = split[1].trim();
        System.out.println(s1);

        //split("/")[0].trim()
        String[] s2 = s1.split("/");
        String s3 = s2[0].trim();
        System.out.println(s3);



//        System.out.println(split[1]);
//        System.out.println(Arrays.toString(split));


    }
}
//if limit > 0 ; will be returned with specific no of substrings
//if limit = 0 ; works as normal split() method
//if limit < 0 (any -ve value) ; works as normal split() method,returns the trailing spaces in the original string, if there are any.

    //String stringOne = queryString.split("from")[1].trim().split(" ")[0].trim();
      //  System.out.println(stringOne);