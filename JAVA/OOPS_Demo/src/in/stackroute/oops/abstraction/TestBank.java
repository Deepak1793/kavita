package in.stackroute.oops.abstraction;

public class TestBank {
    public static void main(String[] args) {
//        Bank bank = new Bank();

        Bank.display();

        Bank sbi = new SBI();
        System.out.println(sbi.getRateOfInterest());

        Bank pnb = new PNB();
        System.out.println(pnb.getRateOfInterest());


    }
}
