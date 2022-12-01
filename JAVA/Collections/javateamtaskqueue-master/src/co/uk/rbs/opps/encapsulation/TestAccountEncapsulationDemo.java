package co.uk.rbs.opps.encapsulation;

public class TestAccountEncapsulationDemo {
    public static void main(String[] args) {
        AccountEncapsulation account = new AccountEncapsulation(34222442, "Anu", "anu@gmail.com", 230f);
//        account.setBalance(-100);
//        account.setName("Anu");
//        account.setEmail("anu@gmail.com");
//        account.setAcc_no(3223232);
//        System.out.println(account.getBalance());
//        System.out.println(account.getName());
//        System.out.println(account.getEmail());
//        System.out.println(account.getAcc_no());
        System.out.println(account.toString());
    }
}
