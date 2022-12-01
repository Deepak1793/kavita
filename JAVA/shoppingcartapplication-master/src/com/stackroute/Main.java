package com.stackroute;

import java.util.List;
import java.util.Scanner;

public class Main {

    private static ProductList productListObj = new ProductList();
    private static Main obj = new Main();

    public static void main(String[] args) {

        //Create Products
        obj.createProducts();

        //Display Products to user
        obj.displayProducts();

        //Taking user requirements
        obj.getUserChoice();
    }

    private void displayProducts() {
        System.out.println("\n\t\t\t\tWELCOME TO EKART\n========================================================");
        System.out.println("\nWe have these products for you. Enjoy Shopping!!!");
        System.out.println("Id\t\tName\t\tQuantity\t\tPrice\t\tBrand\n--------------------------------------------------------");
        for (Product product : productListObj.getProductList())
            System.out.println(product.toString());
    }

    private void createProducts() {
        Product biscuit = new Product(1, "Biscuit", 100, 10, "Oreo");
        Product namkeen = new Product(2, "Namkeen", 100, 50, "Haldiram");
        Product noodle = new Product(3, "Noodles", 100, 12, "Maggie");
        Product oat = new Product(4, "Oats", 100, 85, "Saffola");

        //Get ProductList
        List<Product> productList = productListObj.getProductList();

        //Adding Products to List
        productListObj.addProductsToList(biscuit);
        productListObj.addProductsToList(namkeen);
        productListObj.addProductsToList(noodle);
        productListObj.addProductsToList(oat);
    }

    private void getUserChoice() {
        Scanner scanner = new Scanner(System.in);
        String choice = "y";
        int billPrice = 0;
        String bill = "";
        do {
            System.out.println("\nEnter id and quantity of product you want to buy");
            System.out.println("Enter product id : ");
            int productId = scanner.nextInt();
            System.out.println("Enter product quantity you want to buy : ");
            int productQuantity = scanner.nextInt();

            for (Product product : productListObj.getProductList()) {
                if (product.getId() == productId) {
                    if(product.getQuantity()<productQuantity){
                        System.out.println("Sorry, " + productQuantity + " " + product.getName() + " are temporary unavailable");
                        System.out.println("We have " + product.getQuantity() + " " + product.getName() + " available");
                        System.out.println("Do you want to buy " + product.getQuantity() + " " + product.getName() + "? (Y/N)");
                        if(scanner.next().equalsIgnoreCase("y"))
                            productQuantity = product.getQuantity();
                        else
                            break;
                    }
                    billPrice += product.getPrice() * productQuantity;
                    product.setQuantity(product.getQuantity() - productQuantity);

                    //Generating bill
                    bill += product.getId() + "\t\t" + product.getName() + "\t\t" + productQuantity + "\t\t\t\t" + product.getPrice() + "\t\t\t" + product.getBrand() + "\t\t" + product.getPrice()*productQuantity + "\n";
                    break;
                }
            }

            System.out.println("Do you want to buy more products?(Y/N)");
            choice = scanner.next();
        } while (choice.equalsIgnoreCase("y"));

        System.out.println("\nYour bill : ");
        System.out.println("Id\t\tName\t\tQuantity\t\tPrice\t\tBrand\t\tTotal\n--------------------------------------------------------------------");
        System.out.println(bill);
        System.out.println("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + billPrice);

        System.out.println("\nDo you again want to see products?(Y/N)");
        String seeProducts = scanner.next();
        if (seeProducts.equalsIgnoreCase("y")) {
            obj.displayProducts();
            System.out.println("\nPress 'Y' to buy products again\nPress 'N' to exit");
            if(scanner.next().equalsIgnoreCase("y"))
                obj.getUserChoice();
        }
        System.out.println("\nThankyou for shopping. Enjoy your day!!");
    }
}
