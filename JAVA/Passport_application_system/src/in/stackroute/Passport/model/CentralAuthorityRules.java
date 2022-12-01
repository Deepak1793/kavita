package in.stackroute.Passport.model;

/*
 * CentralAuthorityRules interface lists the mandatory methods that are needed to be implemented:
 * 1. issuePassport() : This function initiate the process of issuing of passport.
 * 2. dispatchPassport() : This function initiate the delivery of passport to the address of applicant.
 * 3. verifyPassport() : This function enables the passport holder or other authorities to cross check the passport.
 * */


public interface CentralAuthorityRules {
    public void issuePassport();
    public void dispatchPassport();
    public void verifyPassport();
}
