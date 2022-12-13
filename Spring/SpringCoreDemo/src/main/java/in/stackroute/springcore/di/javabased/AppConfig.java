package in.stackroute.springcore.di.javabased;

import in.stackroute.springcore.di.xml.UserDaoImpl2;
import org.springframework.context.annotation.*;

@Configuration
//@ComponentScan("")
public class AppConfig {

    @Bean
    @Scope("prototype")
    @Primary
    public UserDaoImpl1 dao1(){
        return new UserDaoImpl1("User1","Pass1","Url1");
    }

    @Bean
    public UserDaoImpl2 dao2(){
        return new UserDaoImpl2("User2","Pass2","url2");
    }

    @Bean(initMethod = "initialize",destroyMethod = "destroy")
    public LoginService service(){
        return new LoginService(dao1());
    }
}
