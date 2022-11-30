package in.stackroute.oops.exception;

import java.util.Scanner;

public class ExceptionDemo {
    public static void main(String[] args) {
        int d=10;
        int n=20;
        int fraction;
        Scanner scan = new Scanner(System.in);
        System.out.println("enter your name");
        String name = scan.next();


        try{
            fraction=n/d;
            System.out.println(fraction);
            System.out.println("try block");
        }
        catch (ArithmeticException e){
            System.out.println("Arithmetic exception");
            System.out.println(e);
        }
        catch (ArrayIndexOutOfBoundsException ae){
            System.out.println(ae);
        }
        catch (Exception e){
            System.out.println("In catch block " + e.getMessage());
        }
        finally {
            System.out.println("Finally Block");
            scan.close();
        }

        System.out.println("End of main method");

    }
}
