package com.example.demo;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;



public class LoginTestBankCredible {
	

	String uname="Raja";
	String pwd = "Raja@123";
	WebDriver driver;
	
	@Test
	public void logintest() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "C://FULL STACk//chromedriver_win32//chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
		driver.get("http://localhost:3000/Login");
		System.out.println("Launch BankCredible Login Page");
		
		WebElement username = driver.findElement(By.id("floatingInput"));

		username.clear();
		username.sendKeys(uname);
		WebElement password = driver.findElement(By.id("floatingPassword"));
		password.clear();
		password.sendKeys(pwd);
		WebElement submitlogin = driver.findElement(By.xpath("//button[@type='submit']"));
		submitlogin.click();
		Thread.sleep(3000);
		
//		String title = driver.getTitle();
//		System.out.println(title);
//		Assert.assertEquals(title, "OrangeHRM");
//		driver.close();
		
		WebElement loginvalue = driver.findElement(By.xpath("//a[text()='Raja']"));
		String logintext = loginvalue.getText();
		Assert.assertEquals(logintext, "Raja");
//		driver.close();
		
		

}
	
}
