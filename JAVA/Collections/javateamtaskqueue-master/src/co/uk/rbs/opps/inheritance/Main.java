package co.uk.rbs.opps.inheritance;

public class Main {
    public static void main(String[] args) {
        //tight coupling
        // child ref = child obj
        SavingsAccount ravi = new SavingsAccount("Ravi", 3242433, "ravi@gmail.com", 98989898, 40000);
        ravi.deposit(2500);
        System.out.println(ravi.getBalance());

        //upcasting or loose coupling
        //parent ref = child obj
    }
}
