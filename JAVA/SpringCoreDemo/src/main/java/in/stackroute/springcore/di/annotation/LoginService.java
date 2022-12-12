package in.stackroute.springcore.di.annotation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

private UserDao dao;// has -A

    public LoginService() {
    }

//     constructor injection
    @Autowired
    public LoginService(@Qualifier("dao1") UserDao dao) {
        this.dao = dao;
    }

    //setter based injection
//    public void setDao(UserDao dao) {
//        this.dao = dao;
//    }

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

