package co.uk.rbs.opps.inheritance;

public class SavingsAccount extends BankAccount{
    private double interestRate;

    public SavingsAccount(){

    }

    public SavingsAccount(String name, int account_no, String email, int contact_no, double balance){
        super(name, account_no, email, contact_no, balance);  //constructor chaining  -----child class constructor calling parent class constructor.
    }

    public void addInterest(double interestRate){
        double interest = getBalance() * interestRate / 100;
        super.deposit(interest);
    }

    public void welcome(){
        System.out.println("Welcome to Savings Account");
    }
}
