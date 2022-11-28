package in.stackroute.regexp;

import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PatternMatcherDemo {
    public static void main(String[] args) {
//        String text = "abc11def22x333zzzz44444";
//
//        Pattern pattern = Pattern.compile("\\d+");
//
//        Matcher matcher = pattern.matcher(text);
//
//       while (matcher.find()){
////           System.out.println(matcher.group());
////           System.out.print(" "+matcher.start());
////           System.out.println(" "+matcher.end());
//       }
//
//       String name = "Natwest Group";
//        String[] splitName = name.split("t");
//
//        System.out.println(splitName); // address of obj
//
//        System.out.println(Arrays.toString(splitName));
//

        String s1 ="RAM";
        String s2 ="RAM";

        if (s1==s2){
            System.out.println("References are equal");
        }
        else {
            System.out.println("References are  not equal");
        }

    }
}
