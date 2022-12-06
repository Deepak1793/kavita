package in.stackroute.java8;

public class Demo implements Calculator{
    public static void main(String[] args) {
        Demo demo = new Demo();
        demo.test();
//        demo.newMethod();
        Demo.newMethod();

        Calculator.myMethod();


    }

    @Override
    public double compute(double num1, double num2) {
        return 3.0;
    }

    public static  void newMethod(){
        System.out.println("New Method");
    }


}
