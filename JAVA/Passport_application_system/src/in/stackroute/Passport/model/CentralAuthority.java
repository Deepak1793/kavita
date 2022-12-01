package in.stackroute.Passport.model;

/*
 * CentralAuthority class implements all the rules defined by CentralAuthority.
 * This class has getter and setter methods for each property.
 * This class has following methods for application processing:
 * 1. submitApplication() : This function submit all the details to the database and
 *                           start appointment schedule process.
 * 2. cancelApplication() : This function cancel the application by successfully changing
 *                            the status to cancel and stop its further processing
 * 3. fetchApplicationStatus() : This function fetches the current stage of application processing
 * */


public class CentralAuthority implements CentralAuthorityRules{

    //Properties of Central Authority
    private String authority_id;
    private String authority_address;
    private String working_hours;

    //Constructors

    public CentralAuthority() {
        System.out.println("Authority Established");
    }

    public CentralAuthority(String authority_id, String authority_address, String working_hours) {
        this.authority_id = authority_id;
        this.authority_address = authority_address;
        this.working_hours = working_hours;
    }

    //Getter and Setter Methods

    //This method get the authority id
    public String getAuthority_id() {
        return authority_id;
    }

    //This method set the authority id
    public void setAuthority_id(String authority_id) {
        this.authority_id = authority_id;
    }

    //This method get the authority address
    public String getAuthority_address() {
        return authority_address;
    }

    //This method set the authority address
    public void setAuthority_address(String authority_address) {
        this.authority_address = authority_address;
    }

    //This method get the working hours of the authority
    public String getWorking_hours() {
        return working_hours;
    }

    //This method set the working hours of the authority
    public void setWorking_hours(String working_hours) {
        this.working_hours = working_hours;
    }

    @Override
    public String toString() {
        return "CentralAuthority{" +
                "authority_id='" + authority_id + '\'' +
                ", authority_address='" + authority_address + '\'' +
                ", working_hours='" + working_hours + '\'' +
                '}';
    }

    //This function initiates the passport issuing process
    @Override
    public void issuePassport() {
        System.out.println("Passport Issued");
    }

    //This function initiates the passport delivery process
    @Override
    public void dispatchPassport() {
        System.out.println("Passport dispatched through speed post");
    }

    //This function allow validation of the passport details
    @Override
    public void verifyPassport() {
        System.out.println("Passport is genuine");
    }
}
