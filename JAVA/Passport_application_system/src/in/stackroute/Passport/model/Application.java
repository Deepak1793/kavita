package in.stackroute.Passport.model;

import java.util.Arrays;
import java.util.Date;

/*
* Application class defines all the parameters needed for application
* This class has getter and setter methods for each property.
* This class has following methods for application processing:
* 1. submitApplication() : This function submit all the details to the database and
*                           start appointment schedule process.
* 2. cancelApplication() : This function cancel the application by successfully changing
*                            the status to cancel and stop its further processing
* 3. fetchApplicationStatus() : This function fetches the current stage of application processing
* */

public class Application {

    private String application_id;
    private String first_name;
    private String last_name;
    private String father_name;
    private String mother_name;
    private String address;
    private Date dob;
    private String gender;
    private String email;
    private String phone_number;
    private String[] documents_details;
    private String application_type;
    private String application_status;

    //Constructors

    public Application() {
        System.out.println("Application generated");
    }

    public Application(String application_id, String first_name, String last_name, String father_name, String mother_name, String address, Date dob, String gender, String email, String phone_number, String[] documents_details, String application_type, String application_status) {
        this.application_id = application_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.father_name = father_name;
        this.mother_name = mother_name;
        this.address = address;
        this.dob = dob;
        this.gender = gender;
        this.email = email;
        this.phone_number = phone_number;
        this.documents_details = documents_details;
        this.application_type = application_type;
        this.application_status = application_status;
    }

    //Getter and Setter Methods

    //This function get the application id
    public String getApplication_id() {
        return application_id;
    }

    //This function set the application id based on current sequence
    public void setApplication_id(String application_id) {
        this.application_id = application_id;
    }

    //This function get first name
    public String getFirst_name() {
        return first_name;
    }

    //This function set the first name
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    //This function get the last name
    public String getLast_name() {
        return last_name;
    }

    //This function set the last name
    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    //This function get the Father's Name
    public String getFather_name() {
        return father_name;
    }

    //This function set the Father's Name
    public void setFather_name(String father_name) {
        this.father_name = father_name;
    }

    //This function get the Mother's Name
    public String getMother_name() {
        return mother_name;
    }

    //This function set the Mother's Name
    public void setMother_name(String mother_name) {
        this.mother_name = mother_name;
    }

    //This function get the address
    public String getAddress() {
        return address;
    }

    //This function set the address
    public void setAddress(String address) {
        this.address = address;
    }

    //This function get the Date of birth
    public Date getDob() {
        return dob;
    }

    //This function set the Date of birth
    public void setDob(Date dob) {
        this.dob = dob;
    }

    //This function get the Gender
    public String getGender() {
        return gender;
    }

    //This function set the Gender
    public void setGender(String gender) {
        this.gender = gender;
    }

    //This function get the Email
    public String getEmail() {
        return email;
    }

    //This function set the Email
    public void setEmail(String email) {
        this.email = email;
    }

    //This function get the phone number
    public String getPhone_number() {
        return phone_number;
    }

    //This function set the phone number
    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    //This function get the document detail
    public String[] getDocuments_details() {
        return documents_details;
    }

    //This function set the document detail
    public void setDocuments_details(String[] documents_details) {
        this.documents_details = documents_details;
    }

    //This function get the application type
    public String getApplication_type() {
        return application_type;
    }

    //This function set the application type
    public void setApplication_type(String application_type) {
        this.application_type = application_type;
    }

    //This function get the application status
    public String getApplication_status() {
        return application_status;
    }

    //This function set the application status
    public void setApplication_status(String application_status) {
        this.application_status = application_status;
    }

    //Overriden Methods

    @Override
    public String toString() {
        return "Application{" +
                "application_id='" + application_id + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", father_name='" + father_name + '\'' +
                ", mother_name='" + mother_name + '\'' +
                ", address='" + address + '\'' +
                ", dob=" + dob +
                ", gender='" + gender + '\'' +
                ", email='" + email + '\'' +
                ", phone_number='" + phone_number + '\'' +
                ", documents_details=" + Arrays.toString(documents_details) +
                ", application_type='" + application_type + '\'' +
                ", application_status='" + application_status + '\'' +
                '}';
    }

    //This function submit the application to passport kendra
    public void submitApplication(){
        System.out.println("Application Submitted");
    }

    //This function cancel the submitted application
    public void cancelApplication(){
        System.out.println("Application Cancelled");
    }

    //This function retrieves the application status
    public void fetchApplicationStatus(){
        System.out.println(getApplication_status());
    }
}
