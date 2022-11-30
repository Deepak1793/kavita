package in.stackroute.oops.wrapperClass;

public class WrapperClassDemo {
    public static void main(String[] args) {
       /* byte a=45;
        short b=186;
        int c =9786;
        long d=101l;
        float e=12.0f;
        double f =12.0d;
        char g='a';
        boolean h=false;*/

        //Wrapper classes
       /* Byte a = new Byte((byte) 45);
        Integer c = new Integer(9786);
        Long d = new Long(23l);
        Boolean e = new Boolean(true);*/



        //Boxing
//        int c =9786;
//        Integer a = new Integer(9786);
//        System.out.println(a);

        //AutoBoxing
        int c =9786;
        Integer a=9786;
        System.out.println(a);

///////////////////////////////////////////////////
        //Unboxing

        /*Integer b=new Integer(60);
        int d = b.intValue();
        System.out.println(d);*/

        //Auto unboxing
        Integer b=new Integer(60);
        int e=b;
        System.out.println(e);



         Integer price;
         Float interest;

         int price1;
         float interest1;


    }
}
