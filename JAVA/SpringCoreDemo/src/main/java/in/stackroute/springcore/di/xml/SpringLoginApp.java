package in.stackroute.springcore.di.xml;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLoginApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

//        UserDao dao = context.getBean("dao1", UserDao.class);
//        dao.connectToDb();

        UserDao dao2 = context.getBean("dao2", UserDao.class);
        dao2.connectToDb();


    }
}
