package in.stackroute.iostreams;

import java.io.FileNotFoundException;
import java.io.PrintStream;

public class PrintStreamDemo {
    public static void main(String[] args) throws FileNotFoundException {
        System.out.println("Printing statement");

        PrintStream printStream = new PrintStream("output.txt");

        System.setOut(printStream);
        System.out.println("This is my output");

    }

}
