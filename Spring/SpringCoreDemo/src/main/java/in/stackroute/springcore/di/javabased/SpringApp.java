package in.stackroute.springcore.di.javabased;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringApp {
    public static void main(String[] args) {

        ConfigurableApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        context.registerShutdownHook();

//        UserDao dao1 = context.getBean("dao1", UserDao.class);
//        dao1.connectToDb();
//        dao1.getUserDetails();

        LoginService loginService = context.getBean("service", LoginService.class);
        loginService.authenticateUser("456");

    }
}
