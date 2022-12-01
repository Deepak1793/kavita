package com.natwest.queue;

import javax.xml.namespace.QName;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;

public class IterationQueue {

    public static void main(String[] args) {

        Queue<String> waitingqueue = new LinkedList<>();

        waitingqueue.add("John");
        waitingqueue.add("Brad");
        waitingqueue.add("Angelina");
        waitingqueue.add("Julia");

        System.out.println("=== Iterating over a queue using Java 8 forEach() ===");
        waitingqueue.forEach(name -> {
            System.out.println(name);
        } );
        System.out.println("\n=== Iterating over a queue using iterator() ===");

        //An Iterator is an object that can be used to loop through collections, like ArrayList
        Iterator<String> waitingQueueIterator = waitingqueue.iterator();
        while(waitingQueueIterator.hasNext()){ //to check next element exist in the queue or not
            String name = waitingQueueIterator.next();
            System.out.println(name);
        }
        System.out.println("\n=== Iterating over a queue using iterator() and Java 8 forEachRemaning() ===");
          waitingQueueIterator = waitingqueue.iterator();
          waitingQueueIterator.forEachRemaining(name -> {  //lambda expression
                      System.out.println(name);
                  });
              System.out.println("\n=== Iterating over a queue using simple for-each loop ===");
              for(String name: waitingqueue){
                  System.out.println(name);
              }

    }

}
