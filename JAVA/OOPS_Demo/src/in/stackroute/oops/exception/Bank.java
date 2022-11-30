package in.stackroute.oops.exception;

public class Bank {
    private Account account; //has-A

    public Bank(Account account) {
        this.account = account;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public int withDrawAmount(int amt) throws InsufficientBalanceException {
        if(amt>account.getBalance()){
            throw new InsufficientBalanceException("Insufficient Balance in your account");
        }else{
            amt=account.getBalance()-amt;
            account.setBalance(amt);


        }
        return account.getBalance();
    }


}
