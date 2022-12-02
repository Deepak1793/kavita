package in.stackroute.iostreams;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class File2Demo {
    public static void main(String[] args) throws IOException {
        Path newFolder = Paths.get("newFolder");
        if (!Files.exists(newFolder)){
            Files.createDirectory(newFolder);
        }

        Path newFile = Paths.get("newtext.txt");
        if (!Files.exists(newFile)){
            Files.createFile(newFile);
        }

        Path newFolders = Paths.get("data1/data2/data3");
        if (!Files.exists(newFolders)){
            Files.createDirectories(newFolders);
        }

    }
}
