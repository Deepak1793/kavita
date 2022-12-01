package com.natwest.queue;

import java.sql.SQLOutput;
import java.util.LinkedList;
import java.util.Queue;

public class QueuePeek {

    public static void main(String[] args) {
        Queue<String> waitingQueue = new LinkedList<>(); //declaring the queue using linked list.
        waitingQueue.add("Aman");
        waitingQueue.add("Yoshi");
        waitingQueue.add("Seema");
        waitingQueue.add("Pooja");
        waitingQueue.add("Naveen");
        System.out.println(waitingQueue);

       System.out.println(waitingQueue.isEmpty());
       System.out.println(waitingQueue.size());


        //It will return exception when queue is empty while execution
        String firstPersonInWaitingQueue = waitingQueue.element();
        System.out.println(firstPersonInWaitingQueue + " is the first person in the queue");

        // It will return null when queue is empty while execution.
        firstPersonInWaitingQueue = waitingQueue.peek();
        System.out.println(firstPersonInWaitingQueue + " is the first person in the queue");

        String name = "Farhan";
        // it will add new person only not the existing one.
        if(waitingQueue.contains(name)){
            System.out.println(name + " is already exist");
        }
        else {
            waitingQueue.add(name);
        }
        //to check the new addition output.
       System.out.println("After adding: " + name + " new list is: " + waitingQueue);

    }
}
