package co.uk.rbs.opps.encapsulation;

public class AccountEncapsulation {
    private long acc_no;
    private String email, name;
    private float balance;

    public AccountEncapsulation() {    //0 parameterized constructor
    }

    public AccountEncapsulation(long acc_no, String email, String name, float balance) {    //parametrized constructor
        this.acc_no = acc_no;
        this.email = email;
        this.name = name;
        this.balance = balance;
    }

    public long getAcc_no() {
        return acc_no;
    }

    public void setAcc_no(long acc_no) {
        this.acc_no = acc_no;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getBalance() {
        return balance;
    }

    public void setBalance(float balance) {
        if (balance < 0){
            System.out.println("invalid balance");
        }
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "AccountEncapsulation{" +
                "acc_no=" + acc_no +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", balance=" + balance +
                '}';
    }
}

