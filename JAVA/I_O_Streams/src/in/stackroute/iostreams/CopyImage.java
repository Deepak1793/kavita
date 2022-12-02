package in.stackroute.iostreams;

import java.io.*;

public class CopyImage {

    public static void main(String[] args) {
        String filePath = "D:/image/smiley.jpg";

//        FileInputStream reader = new FileInputStream(filePath);
//        BufferedInputStream bufferedReader = new BufferedInputStream(reader);

        try(
                BufferedInputStream reader = new BufferedInputStream(new FileInputStream(filePath));
              BufferedOutputStream writer  =new BufferedOutputStream(new FileOutputStream("image2.jpg"))
                ) {
            int data;
            while ((data=reader.read())!=-1){
                writer.write(data);
            }
            writer.flush();

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


    }

}
