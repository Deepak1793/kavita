package in.stackroute.oops.association;

public class ProjectTest {
    public static void main(String[] args) {

        SimpleDate sDate = new SimpleDate(30, 11, 2022);
        SimpleDate edate = new SimpleDate(30, 11, 2023);


        Project pr1 = new Project("PR2", "E-Management system", sDate, edate);


        System.out.println(pr1.getStartDate().getDate());
        System.out.println(pr1.getEndDate().getDate());

        System.out.println("---------------------------------");

        System.out.println(sDate.getDate());
        System.out.println(edate);


    }
}
