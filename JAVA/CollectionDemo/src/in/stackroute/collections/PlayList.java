package in.stackroute.collections;

import java.util.ArrayList;
import java.util.List;

public class PlayList {
    private String name;
    private List<String> songs;

    public PlayList(String name) {
        this.name = name;
        songs = new ArrayList<>();
    }

    boolean addSong(String song){
        return this.songs.add(song);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getSongs() {
        return songs;
    }


}
