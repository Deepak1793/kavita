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

}

