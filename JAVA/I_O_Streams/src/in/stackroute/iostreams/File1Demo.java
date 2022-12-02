package in.stackroute.iostreams;

import java.io.File;
import java.io.IOException;

public class File1Demo {

    public static void main(String[] args) throws IOException {
        File sampleFile = new File("Sample.txt");
        boolean newFile = sampleFile.createNewFile();
//        System.out.println(newFile);

        File file2 = new File("textFile.txt");
        if (!file2.exists()){
            file2.createNewFile();
        }

        File folder1 = new File("Folder1");
        if (!folder1.exists()){
            folder1.mkdir();
        }

        File folders = new File("Folder2/Folder3/Folder4");
        if(!folders.exists()){
            folders.mkdirs();
        }

        File file = new File(folder1, "movie.txt");
        if(!file.exists()){
            file.createNewFile();
        }

        System.out.println(folder1.isDirectory());
        System.out.println(folder1.isFile());
        System.out.println(folder1.getAbsoluteFile());



    }

}
