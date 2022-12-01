package com.natwest.queue;

import java.util.Deque;
import java.util.LinkedList;

public class deque {
    public static void main(String[] args) {
        Deque<Integer> numbers = new LinkedList<>();
        numbers.offer(1);
        numbers.offerLast(2);
        numbers.offerFirst(3);
        System.out.println(numbers);
        int firstElement = numbers.peekFirst();
        System.out.println(firstElement);
        int lastElement = numbers.peekLast();
        System.out.println(lastElement);
        int removedNumber1 = numbers.pollFirst();
        System.out.println(removedNumber1);
        int removedNumber2 = numbers.pollLast();
        System.out.println(removedNumber2);
        System.out.println(numbers);

    }
}
