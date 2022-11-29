package in.stackroute.oops.inheritance;

public class Main {
    public static void main(String[] args) {

        //tight coupling
       // child ref = child obj
//        SavingsAccount santhosh = new SavingsAccount("Santhosh", 321564564, "st@gmail.com", 13465464, 232336.0);

//        santhosh.deposit(2500.0);
//        System.out.println(santhosh.getBalance());

        //upcasting or loose coupling
        //parent ref = child obj
        BankAccount manoj = new SavingsAccount("Manoj", 321564564, "st@gmail.com", 13465464, 232336.0);
        manoj.deposit(3000);
        System.out.println(manoj.getBalance());

        //Downcasting ---> converting parent ref to child type ref to access specialised methods
        ((SavingsAccount)(manoj)).addInterest(10);
        System.out.println(manoj.getBalance());

    }
}
