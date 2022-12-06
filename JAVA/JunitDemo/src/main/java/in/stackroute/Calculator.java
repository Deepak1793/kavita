package in.stackroute;

/**
 * Hello world!
 *
 */
public class Calculator
{

    public int add(int a,int b){
        return  a+b;
    }

//    public static double div(double a, double b){
//        return a/b;
//    }

    public static double div(double a, double b) throws ArithmeticException{
       throw new ArithmeticException("/ by zero");
    }
}
