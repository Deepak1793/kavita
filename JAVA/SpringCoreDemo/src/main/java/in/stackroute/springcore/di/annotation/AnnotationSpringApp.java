package in.stackroute.springcore.di.annotation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AnnotationSpringApp {
    public static void main(String[] args) {
       ApplicationContext context = new ClassPathXmlApplicationContext("annotation.xml");

//        UserDao dao1 = context.getBean("dao1", UserDao.class);
//        dao1.connectToDb();

        LoginService service = context.getBean("loginService", LoginService.class);
        service.authenticateUser("123");

    }
}
