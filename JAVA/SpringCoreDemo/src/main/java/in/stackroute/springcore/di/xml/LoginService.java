package in.stackroute.springcore.di.xml;

import java.util.ArrayList;

public class LoginService {
private UserDao dao;// has -A

    public LoginService() {
    }

    // constructor injection
//     public LoginService(UserDao dao) {
//        this.dao = dao;
//    }

    //setter based injection
    public void setDao(UserDao dao) {
        this.dao = dao;
    }

    public void authenticateUser(String userId){
//        UserDaoImpl1 dao = new UserDaoImpl1();
        dao.connectToDb();
        dao.getUserDetails();

    }

    public void initialize(){
        System.out.println("Login service initialised");
    }

    public void destroy(){
        System.out.println("Login service destroyed");
    }

}

