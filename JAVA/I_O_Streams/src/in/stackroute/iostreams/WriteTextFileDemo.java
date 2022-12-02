package in.stackroute.iostreams;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class WriteTextFileDemo {
    public static void main(String[] args) {
        String[] lines={"Data 5","Data 6"};

        try(
                FileWriter writer = new FileWriter("Sample.txt",true);
                BufferedWriter bufferedWriter = new BufferedWriter(writer);

                ) {
            for (String temp:lines){
                bufferedWriter.newLine();
                bufferedWriter.write(temp);
            }
            bufferedWriter.flush();
            System.out.println("Data has written");

        } catch (IOException e) {
            throw new RuntimeException(e);
        }


    }
}
