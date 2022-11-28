package in.stackroute.regexp;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
       String company = "stackroute";
//        System.out.println(company.matches("stackroute"));

        System.out.println(company.matches("[a-z]+"));

      String  panNumber = "ABCDE1345P";
//        System.out.println(panNumber.matches("[A-Z]{5}[0-9]{4}[A-Z]"));
        System.out.println(panNumber.matches("[A-Z]{5}\\d{4}[A-Z]")?"Valid":"Invalid");

        Scanner scan = new Scanner(System.in);
        System.out.println(scan);


    }
}


