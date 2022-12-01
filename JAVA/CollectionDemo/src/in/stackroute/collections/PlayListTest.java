package in.stackroute.collections;

public class PlayListTest {
    public static void main(String[] args) {
        PlayList hindi_songs = new PlayList("Hindi songs");
        hindi_songs.addSong("ABCD");
        hindi_songs.addSong("Dil chahatha hai");
        hindi_songs.addSong("Dil tu hi");

        System.out.println(hindi_songs.getSongs());

    }
}
