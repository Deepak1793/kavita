package in.stackroute.oops.encapsulation;

public class TestAccount {
    public static void main(String[] args) {
        Account account = new Account();
        System.out.println("account.acc_no : "+account.acc_no);
        System.out.println("account.name : "+account.name);
        System.out.println("account.email : "+account.email);
        System.out.println("account.balance : "+account.balance);

        account.acc_no=213212312154l;
        account.name="Kavitha";
        account.email="kavitha.m@stackroute.in";
        account.balance=15000000000f;

        System.out.println("After setting the value..................");
        System.out.println("account.acc_no : "+account.acc_no);
        System.out.println("account.name : "+account.name);
        System.out.println("account.email : "+account.email);
        System.out.println("account.balance : "+account.balance);


    }
}
