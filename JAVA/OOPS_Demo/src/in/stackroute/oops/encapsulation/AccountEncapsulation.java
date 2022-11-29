package in.stackroute.oops.encapsulation;

public class AccountEncapsulation {
   private  long acc_no;
   private String name,email;
   private float balance;


   public AccountEncapsulation() {
   }

   public AccountEncapsulation(long acc_no, String name, String email, float balance) {
      this.acc_no = acc_no;
      this.name = name;
      this.email = email;
      this.balance = balance;
   }

   public long getAcc_no() {
      return acc_no;
   }

   public void setAcc_no(long acc_no) {
      this.acc_no = acc_no;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public String getEmail() {
      return email;
   }

   public void setEmail(String email) {
      this.email = email;
   }

   public float getBalance() {
      return balance;
   }

   public void setBalance(float balance) {
      if(balance<0){
         System.out.println("In valid balance");
      }
      else {
         this.balance = balance;
      }
   }

   @Override
   public String toString() {
      return "AccountEncapsulation{" +
              "acc_no=" + acc_no +
              ", name='" + name + '\'' +
              ", email='" + email + '\'' +
              ", balance=" + balance +
              '}';
   }
}
