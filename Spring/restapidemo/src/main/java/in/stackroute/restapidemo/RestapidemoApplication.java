package in.stackroute.restapidemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


//@SpringBootConfiguration - configuration class
//@EnableAutoConfiguration -
//@ComponentScan -
@SpringBootApplication
public class RestapidemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestapidemoApplication.class, args);
	}

}
