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

public class PassportSevaKendra implements PassportKendraRules, PaymentGatewayRules{

    //Properties of Passport Seva Kendra
    private String seva_kendra_id;
    private String kendra_address;
    private String working_hours;

    //Constructors

    public PassportSevaKendra() {
        System.out.println("New Seva Kendra opened");
    }

    public PassportSevaKendra(String seva_kendra_id, String kendra_address, String working_hours) {
        this.seva_kendra_id = seva_kendra_id;
        this.kendra_address = kendra_address;
        this.working_hours = working_hours;
    }

    //This function schedules appointment for application submitted based on office policies
    public void scheduleAppointment() {
        System.out.println("Appointment Scheduled");
    }

    //This function updates appointment for request submitted based on office policies
    public void updateAppointment() {
        System.out.println("Appointment Rescheduled");
    }

    //Getter and Setter Methods

    //This function get seva kendra id
    public String getSeva_kendra_id() {
        return seva_kendra_id;
    }

    //This function set seva kendra id
    public void setSeva_kendra_id(String seva_kendra_id) {
        this.seva_kendra_id = seva_kendra_id;
    }

    //This function get seva kendra address
    public String getKendra_address() {
        return kendra_address;
    }

    //This function set seva kendra address
    public void setKendra_address(String kendra_address) {
        this.kendra_address = kendra_address;
    }

    //This function get seva kendra working hours
    public String getWorking_hours() {
        return working_hours;
    }

    //This function Set seva kendra working hours
    public void setWorking_hours(String working_hours) {
        this.working_hours = working_hours;
    }

    @Override
    public String toString() {
        return "PassportSevaKendra{" +
                "seva_kendra_id='" + seva_kendra_id + '\'' +
                ", kendra_address='" + kendra_address + '\'' +
                ", working_hours='" + working_hours + '\'' +
                '}';
    }

    //This function initiates the processing of application
    @Override
    public void processApplication() {
        System.out.println("Application Under Process");
    }

    //This function initiates the approval of application for passport issuance
    @Override
    public void approveApplication() {
        System.out.println("Application approved for passport");
    }

    //This function rejects passport application
    @Override
    public void rejectApplication() {
        System.out.println("Application rejected");
    }

    //This function initiates the verification of documents submitted
    @Override
    public void verifyDocuments() {
        System.out.println("Documents Verification under process");
    }

    //This function initiates the background check process
    @Override
    public void backgroundCheckStatus() {
        System.out.println("Criminal Record check under process");
    }

    //This function initiates the renewal process for expired or going to expire passports
    @Override
    public void renewPassport() {
        System.out.println("New Passport will be dispatched soon");
    }

    //This function initiates the payment process for approved application
    @Override
    public void fetchPaymentGateway() {
        System.out.println("Proceed to pay for passport as per preferred mode");
    }

    //This function completes the payment process and generate status
    @Override
    public void closePaymentGateway() {
        System.out.println("Payment status");
    }

    //This function initiates the refund in case of cancellation after successful payment
    @Override
    public void refundPayment() {
        System.out.println("Refund under process");
    }

}
