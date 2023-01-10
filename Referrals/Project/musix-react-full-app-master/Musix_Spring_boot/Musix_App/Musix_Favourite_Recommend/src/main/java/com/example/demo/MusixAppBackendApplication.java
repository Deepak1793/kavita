package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@CrossOrigin(origins="*")
@EnableSwagger2
@EnableWebMvc
public class MusixAppBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(MusixAppBackendApplication.class, args);
	}
	
	@Bean
	public Docket getDocket() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select().paths(PathSelectors.ant("/*"))
				.apis(RequestHandlerSelectors.basePackage("com.example.demo")).build().apiInfo(apiDetails());
	}

	private ApiInfo apiDetails() {
		ApiInfo apiInfo = new ApiInfo("User Service Api", "Demo on microservice with Swagger", "1.0", "R.fdr@gmail.com", "prashant", null, null);
		return apiInfo;
	}

}
