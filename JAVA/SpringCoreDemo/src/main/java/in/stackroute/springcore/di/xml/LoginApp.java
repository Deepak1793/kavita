package in.stackroute.springcore.di.xml;

public class LoginApp {

    public static void main(String[] args) {

        UserDao dao1 = new UserDaoImpl1("user1", "pass1", "url1");
        UserDao dao2 = new UserDaoImpl2("user2", "pass2", "url2");
//        LoginService loginService = new LoginService(dao2);
//        loginService.authenticateUser("123");

        LoginService loginService2 = new LoginService();
        loginService2.setDao(dao1);

        loginService2.authenticateUser("456");



    }
}
