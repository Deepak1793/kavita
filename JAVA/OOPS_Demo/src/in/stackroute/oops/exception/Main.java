package in.stackroute.oops.exception;

public class Main {
    public static void main(String[] args)  {
        Account account = new Account();
        account.setBalance(5000);
        Bank bank = new Bank(account);

        try {
            System.out.println(bank.withDrawAmount(6000));
        } catch (InsufficientBalanceException e) {
            System.out.println("message : " + e.getMessage());
        }

//        System.out.println(bank.getAccount().getBalance());


    }
}
