package co.uk.rbs.opps.encapsulation;

public class TestAccount {
    public static void main(String[] args) {
        Account account = new Account();
        System.out.println(account.acc_no);
        System.out.println(account.name);
        System.out.println(account.email);
        System.out.println(account.balance);

        System.out.println("after settign the value");
        account.acc_no = 2332424332l;
        account.name = "kavitha";
        account.email = "kavitha.m@stackroute.in";
        account.balance = 150f;
    }
}
