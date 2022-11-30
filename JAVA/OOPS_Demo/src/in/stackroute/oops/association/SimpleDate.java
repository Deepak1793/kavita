package in.stackroute.oops.association;

public class SimpleDate {
    private int day;
    private int month;
    private int year;

    public SimpleDate(int day, int month, int year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public String getDate(){
        return day+"/"+month+"/"+year;
    }

    public boolean validateDate(){
        boolean valid=false;
        if((month>=1)&&(month<=12)){
            valid=true;
        }
        return valid;
    }
}
