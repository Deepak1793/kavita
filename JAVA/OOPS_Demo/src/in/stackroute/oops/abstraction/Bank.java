package in.stackroute.oops.abstraction;

abstract class Bank {
    static int balance;
    abstract int getRateOfInterest();
//    abstract double loanPercentage();

    void message(){
        System.out.println("My Message");
    }

    static void display(){
        System.out.println("Static method");
    }


}
