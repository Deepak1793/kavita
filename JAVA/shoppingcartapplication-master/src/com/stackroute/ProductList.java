package com.stackroute;

import java.util.ArrayList;
import java.util.List;

public class ProductList {

    private List<Product> productList;

    public List<Product> getProductList() {
        if (productList == null)
            productList = new ArrayList<>();
        return productList;
    }

    public void addProductsToList(Product product) {
        productList.add(product);
    }
}
