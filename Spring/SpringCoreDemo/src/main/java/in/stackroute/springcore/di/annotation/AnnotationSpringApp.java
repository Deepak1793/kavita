package in.stackroute.springcore.di.annotation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AnnotationSpringApp {
    public static void main(String[] args) {
//      ConfigurableApplicationContext context = new ClassPathXmlApplicationContext("annotation.xml");
//      context.registerShutdownHook();

        ConfigurableApplicationContext context = new AnnotationConfigApplicationContext("in.stackroute.springcore.di.annotation");
        context.registerShutdownHook();

//        UserDao dao1 = context.getBean("dao1", UserDao.class);
//        dao1.connectToDb();

        LoginService service = context.getBean("loginService", LoginService.class);
        service.authenticateUser("123");

        LoginService service2 = context.getBean("loginService", LoginService.class);
        System.out.println(service2==service);


    }
}
