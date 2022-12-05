package in.stackroute.java8;

public class Computation {
    public static void main(String[] args) {
       Calculator additionalLambda= (num1,num2)->  num1+num2;

        System.out.println(additionalLambda.compute(10, 20));


        Calculator multiply= (a,b)-> a*b;
        System.out.println(multiply.compute(10, 20));
    }
}
