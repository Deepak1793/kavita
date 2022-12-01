package in.stackroute.Passport.model;

import java.util.Date;

/*
 * Passport class defines all the parameters (properties) of passport.
 * This class has getter and setter methods for each property.
 * This class has following methods for passport:
 * 1. getDetails() : This function fetches all the details of passport.
 * */

public class Passport {

    //Passport Details
    private String passport_number;
    private String passport_type;
    private String firstname;
    private String lastname;
    private Date dob;
    private String gender;
    private String birth_place;
    private String issue_place;
    private Date date_of_issue;
    private Date date_of_expiry;
    private String status;

    //Constructors

    public Passport() {
    }

    public Passport(String passport_number, String passport_type, String firstname, String lastname, Date dob, String gender, String birth_place, String issue_place, Date date_of_issue, Date date_of_expiry, String status) {
        this.passport_number = passport_number;
        this.passport_type = passport_type;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.gender = gender;
        this.birth_place = birth_place;
        this.issue_place = issue_place;
        this.date_of_issue = date_of_issue;
        this.date_of_expiry = date_of_expiry;
        this.status = status;
    }

    //Getter and Setter Methods for each property

    //This function get Passport Number
    public String getPassport_number() {
        return passport_number;
    }

    //This function set Passport Number
    public void setPassport_number(String passport_number) {
        this.passport_number = passport_number;
    }

    //This function get Passport Type
    public String getPassport_type() {
        return passport_type;
    }

    //This function set Passport Type
    public void setPassport_type(String passport_type) {
        this.passport_type = passport_type;
    }

    //This function get First Name on Passport
    public String getFirstname() {
        return firstname;
    }

    //This function set First Name on Passport
    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    //This function get Last Name on Passport
    public String getLastname() {
        return lastname;
    }

    //This function set Last Name on Passport
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    //This function get DOB on Passport
    public Date getDob() {
        return dob;
    }

    //This function set DOB on Passport
    public void setDob(Date dob) {
        this.dob = dob;
    }

    //This function get gender on Passport
    public String getGender() {
        return gender;
    }

    //This function Set Gender on Passport
    public void setGender(String gender) {
        this.gender = gender;
    }

    //This function get Birth Place on Passport
    public String getBirth_place() {
        return birth_place;
    }

    //This function set Birth Place on Passport
    public void setBirth_place(String birth_place) {
        this.birth_place = birth_place;
    }

    //This function get Issue Place of Passport
    public String getIssue_place() {
        return issue_place;
    }

    //This function get Issue Place of Passport
    public void setIssue_place(String issue_place) {
        this.issue_place = issue_place;
    }

    //This function get Passport Date of Issuance
    public Date getDate_of_issue() {
        return date_of_issue;
    }

    //This function set Passport Date of Issuance
    public void setDate_of_issue(Date date_of_issue) {
        this.date_of_issue = date_of_issue;
    }

    //This function get Passport Date of Expiry
    public Date getDate_of_expiry() {
        return date_of_expiry;
    }

    //This function set Passport Date of Expiry
    public void setDate_of_expiry(Date date_of_expiry) {
        this.date_of_expiry = date_of_expiry;
    }

    //This function get Passport Status
    public String getStatus() {
        return status;
    }

    //This function set Passport Status
    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Passport{" +
                "passport_number='" + passport_number + '\'' +
                ", passport_type='" + passport_type + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", dob=" + dob +
                ", gender='" + gender + '\'' +
                ", birth_place='" + birth_place + '\'' +
                ", issue_place='" + issue_place + '\'' +
                ", date_of_issue=" + date_of_issue +
                ", date_of_expiry=" + date_of_expiry +
                ", status='" + status + '\'' +
                '}';
    }

    //This function get details of the passport based on passport number provided
    public String getDetails(String passport_number){
        return this.toString();
    }

}
