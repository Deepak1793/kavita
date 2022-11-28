package in.stackroute.objects;

public class Demo {

    static{
        System.out.println("Static block");
    }


    public static void main(String[] args) {
        {
            System.out.println("Non-static block");
        }
    }


}
