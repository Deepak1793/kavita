package in.stackroute.objects;

public class MethodOverloading {
   int add (int a,int b){
       return a+b;
   }

   float add(int a,float b){
       return a+b;
   }

   double add(float a, float b){
       return a+b;
   }

   double add(int a, double b){
       return a+b;
   }

    double add(int a, double b,int c){
        return a+b+c;
    }

    double add(float a, float b,int c){
        return a+b+c;
    }

   static void divide(int a, int b){
        System.out.println("You are calling Static method");
    }

}
