package in.stackroute.Passport.model;

/*
 * PassportRulesRules interface lists the mandatory methods that are needed to be implemented by Passport Seva Kendra:
 * 1. processApplication() : This function initiate the processing application submitted.
 * 2. approveApplication() : This function approves the application for passport issuance after all verification checks.
 * 3. rejectApplication() : This function cancel the application in case of failure at any point of time of verification checks.
 * 4. verifyDocuments() : This function defines the method for verification of submitted documents.
 * 5. backgroundCheckStatus() : This function initiates the criminal check process based on the location of the applicaiton submitted (rural or urban).
 * 6. renewPassport() : This function initiates the renewal of issued passport and approve issuance of renewed passport.
 * */

public interface PassportKendraRules {
    public void processApplication();
    public void approveApplication();
    public void rejectApplication();
    public void verifyDocuments();
    public void backgroundCheckStatus();
    public void renewPassport();
}
