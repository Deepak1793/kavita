package in.stackroute.Passport.model;

/*
 * PaymentGatewayRules interface lists the mandatory methods that are needed to be implemented for payment:
 * 1. fetchPaymentGateway() : This function defines the payment portal.
 *                              If online, applicant taken to payment link.
 *                              Else, applicant directed to counter for payment.
 * 2. closePaymentGateway() : This function generates the transaction receipt.
 * 3. refundPayment() : This function initiates refund process based on payment method.
 * */

public interface PaymentGatewayRules {
    void fetchPaymentGateway();
    void closePaymentGateway();
    void refundPayment();
}
