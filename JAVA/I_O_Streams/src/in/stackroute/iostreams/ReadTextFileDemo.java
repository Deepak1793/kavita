package in.stackroute.iostreams;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class ReadTextFileDemo {
    public static void main(String[] args) {
        FileReader fileReader;
        try {
            fileReader = new FileReader("Sample.txt");
            BufferedReader bufferedReader = new BufferedReader(fileReader);
//            String line = bufferedReader.readLine(); //readline() will return null when it encounters end of the line
//            System.out.println(line);


            String data="";
            while (data !=null){
                 data = bufferedReader.readLine();
                 if(data != null) {
                     System.out.println(data);
                 }

            }

            fileReader.close();
            bufferedReader.close();
        } catch (FileNotFoundException e) {
            System.out.println(e);
        } catch (IOException e) {
            System.out.println(e);
        }


    }
}
