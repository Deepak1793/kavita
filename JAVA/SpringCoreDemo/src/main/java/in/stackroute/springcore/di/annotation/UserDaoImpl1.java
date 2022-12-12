package in.stackroute.springcore.di.annotation;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository("dao1")  //userDaoImpl1
//@Primary
public class UserDaoImpl1 implements UserDao {
    @Value("User1")
    private String username;
    @Value("Pass1")
    private String password;
    @Value("URL-1")
    private String dbUrl;

    public UserDaoImpl1() {
        System.out.println("Default constructor UserDaoImpl1");
    }

    public UserDaoImpl1(String username, String password, String dbUrl) {
        System.out.println("Parameterised constructor executed");
        this.username = username;
        this.password = password;
        this.dbUrl = dbUrl;
    }

    public void connectToDb(){
        System.out.println("Connected to DB using JDBC " + username + " url: " +dbUrl);
    }

    public void getUserDetails(){
        System.out.println("Fetched user credentials from DB");
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDbUrl() {
        return dbUrl;
    }

    public void setDbUrl(String dbUrl) {
        this.dbUrl = dbUrl;
    }
}
