package in.stackroute.springcore.di.xml;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLoginApp {
    public static void main(String[] args) {
        ConfigurableApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
        context.registerShutdownHook();

//        UserDao dao = context.getBean("dao1", UserDao.class);
//        dao.connectToDb();

//        UserDao dao2 = context.getBean("dao2", UserDao.class);
//        dao2.connectToDb();

//        LoginService service = context.getBean("loginservice", LoginService.class);
//        service.authenticateUser("132");
//
//        LoginService service2 = context.getBean("loginservice", LoginService.class);
//        System.out.println(service.hashCode());
//        System.out.println(service2.hashCode());
//        System.out.println(service2==service);

        LoginService service = context.getBean("loginservice2", LoginService.class);
        service.authenticateUser("132");





    }
}
