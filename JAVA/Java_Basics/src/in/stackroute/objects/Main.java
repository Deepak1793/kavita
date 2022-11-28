package in.stackroute.objects;

public class Main {
    public static void main(String[] args) {
        Dog d1 = new Dog();
        d1.color="Black";
//        d1.breed="Pomarian";
        Dog.breed="Pomarian";
        System.out.println(d1.color);
        System.out.println(d1.price);
        System.out.println(d1.name);
        System.out.println(d1.breed);
        System.out.println(d1);


        Dog d2 = new Dog();
        d2.color="White";
        d2.name="Blacky";
        d2.price=5000;
//        d2.breed = "Dolmachine";
        Dog.breed="Dolmachine";
        System.out.println(d2.color);
        System.out.println(d2.price);
        System.out.println(d2.name);
        System.out.println(d2.breed);
        System.out.println(d2);

//        MethodOverloading ml = new MethodOverloading();
//        System.out.println(ml.add(1, 2));
//        ml.divide(10,20);

        MethodOverloading.divide(10,20);


    }
}
