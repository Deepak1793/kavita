package in.stackroute.springcore.di.annotation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Service
//@Scope("prototype")
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

    @PostConstruct
    public void initialize(){
        System.out.println("Login service initialised");
    }

    @PreDestroy
    public void destroy(){
        System.out.println("Login service destroyed");
    }

}

