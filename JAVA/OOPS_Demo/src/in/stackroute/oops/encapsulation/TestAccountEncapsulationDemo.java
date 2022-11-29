package in.stackroute.oops.encapsulation;

public class TestAccountEncapsulationDemo {
    public static void main(String[] args) {
        AccountEncapsulation account = new AccountEncapsulation(23132155l,"Swathi","swathi@gmail.com",2132132116f);

//       account.setBalance(2355454);
//       account.setName("Anu");
//       account.setEmail("anu@gmail.com");
//       account.setAcc_no(1313256465l);

//        System.out.println(account.getAcc_no() );
//        System.out.println(account.getName());
//        System.out.println(account.getBalance());
//        System.out.println(account.getEmail());

        System.out.println(account.toString());

    }
}
