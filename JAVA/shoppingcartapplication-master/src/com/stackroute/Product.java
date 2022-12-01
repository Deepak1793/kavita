package com.stackroute;

public class Product {

    private int id;
    private String name;
    private int quantity;
    private int price;
    private String brand;

    //Parameterized Constructor
    public Product(int id, String name, int quantity, int price, String brand) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.brand = brand;
    }

    //Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    //toString method
    @Override
    public String toString() {
        return id + "\t\t" + name + "\t\t" + quantity + "\t\t\t\t" + price + "\t\t\t" + brand;
    }
}
