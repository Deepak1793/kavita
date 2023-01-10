package com.example.demo.aspectj;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
	
	private Log log = LogFactory.getLog(getClass());
	
	 @Before("execution(* com.example.demo.controller.UserController.*(..))")
	    public void logBefore(JoinPoint point) {
	        log.info(point.getSignature().getName() + " before called...");
	    }
	 
	 @After("execution(* com.example.demo.controller.UserController.*(..))")
	    public void logAfter(JoinPoint point) {
	        log.info(point.getSignature().getName() + " after called...");
	    }
	 
	 @AfterReturning("execution(* com.example.demo.controller.UserController.*(..))")
	    public void logAfterReturning(JoinPoint point) {
	        log.info(point.getSignature().getName() + " after returning called...");
	    }
	 
	 @AfterThrowing("execution(* com.example.demo.controller.UserController.*(..))")
	    public void afterThrowing(JoinPoint point) {
	        log.info(point.getSignature().getName() + " afterThrowing called...");
	      
	    }
	 
	 
	
}

