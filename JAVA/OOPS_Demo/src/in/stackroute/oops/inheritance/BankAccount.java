package in.stackroute.oops.inheritance;

public class BankAccount {
    private String name;
    private int account_no;
    private String email;
    private int contact_no;
//    private double balance;
   private Double balance;


    public BankAccount() {
    }

    public BankAccount(String name, int account_no, String email, int contact_no, double balance) {
        this.name = name;
        this.account_no = account_no;
        this.email = email;
        this.contact_no = contact_no;
        this.balance = balance;
    }

    public void welcome(){
        System.out.println("Welcome to Bank Account");
    }

    public void deposit(double amount){
        balance=balance+amount;
    }

    public void withdraw(double amount){
        if(amount>this.balance){
            System.out.println("Insufficient balance");
        }
        else {
            balance = balance - amount;
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAccount_no() {
        return account_no;
    }

    public void setAccount_no(int account_no) {
        this.account_no = account_no;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getContact_no() {
        return contact_no;
    }

    public void setContact_no(int contact_no) {
        this.contact_no = contact_no;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "BankAccount{" +
                "name='" + name + '\'' +
                ", account_no=" + account_no +
                ", email='" + email + '\'' +
                ", contact_no=" + contact_no +
                ", balance=" + balance +
                '}';
    }
}
