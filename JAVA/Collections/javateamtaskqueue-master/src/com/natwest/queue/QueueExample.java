package com.natwest.queue;

import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {

    public static void main(String[] args) {
        Queue<String> waitingQueue = new LinkedList<>(); //declaring the queue using linked list.
//        waitingQueue.add("Rajiv");
//        waitingQueue.add("Amit");
//        waitingQueue.add("Puneet");
//        waitingQueue.add("Dipin");
//        waitingQueue.add("Lalit");
        System.out.println(waitingQueue);

      //it will return exception when queue is empty while execution
//      String name = waitingQueue.remove();
//      System.out.println(name + "" + waitingQueue);

      //it will return null when queue is empty while execution
      String name = waitingQueue.poll();
      System.out.println(name + "" + waitingQueue);

    }
}
