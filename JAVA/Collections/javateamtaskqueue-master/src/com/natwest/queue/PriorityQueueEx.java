package com.natwest.queue;

import java.util.PriorityQueue;

public class PriorityQueueEx {

//priority queue elements are retrieved in sorted order
//head of the priority queue will be the smallest element
//once this element is retrieved, the next smallest element will be the head of the queue
//elements of the priority queue may not be sorted, but these will always be retrieved in sorted order

    public static void main(String[] args) {
        PriorityQueue<Integer> numbers = new PriorityQueue<>();
        numbers.offer(5);
        numbers.offer(1);
        numbers.offer(2);
        numbers.offer(4);
        numbers.offer(6);

        System.out.println(numbers);

        // to retrieve the first element & it will return null when there is no element.
        int accessedNumber = numbers.peek();
        System.out.println(accessedNumber);

        int removedNumber = numbers.remove();
        System.out.println(removedNumber + " is removed form the list");
        System.out.println("Updated Numbers" + numbers);

        removedNumber = numbers.remove();
        System.out.println(removedNumber + " is removed form the list");
        System.out.println("Updated Numbers" + numbers);
    }
}
