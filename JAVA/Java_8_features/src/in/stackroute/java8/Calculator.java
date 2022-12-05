package in.stackroute.java8;

@FunctionalInterface
public interface Calculator {

    //public abstract methods
// functional interface should have atleast one abstract method
    double compute(double num1,double num2);

//    double compute1(double num1,double num2);

    public static void myMethod(){
        System.out.println("Static method");
    }

    default public void test(){
        System.out.println("Default method");
    }
}
