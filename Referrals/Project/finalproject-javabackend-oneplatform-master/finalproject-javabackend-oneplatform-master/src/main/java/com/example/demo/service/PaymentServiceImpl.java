package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Payments;
import com.example.demo.repository.PaymentsRepository;

@Service
public class PaymentServiceImpl implements PaymentsService{
	
	
	@Autowired
	private PaymentsRepository payRepo;


	@Override
	public Payments findAPayment(Integer paymentid) {
		return payRepo.findById(paymentid).get();
	}

	@Override
	public List<Payments> findAllPayments() {
		return payRepo.findAll();
	}

	@Override
	public Payments addAPayment(Payments payment) {
		return payRepo.save(payment);
	}

	@Override
	public Payments updateAnAccount(Payments payment) {
		Payments updatedAccount = null;
		Optional optional = payRepo.findById(payment.getAccno());
		
		if(optional.isPresent()) {
			Payments getAccount =payRepo.findById(payment.getAccno()).get();
			getAccount.setPaymentid(payment.getPaymentid());
			getAccount.setBeneficiary(payment.getBeneficiary());
			getAccount.setBeneficiaryaccno(payment.getBeneficiaryaccno());
			getAccount.setAccno(payment.getAccno());
			getAccount.setEmailid(payment.getEmailid());
			getAccount.setPaydesc(payment.getPaydesc());
			getAccount.setAmount(payment.getAmount());
			updatedAccount = payRepo.save(getAccount);
		}
		return updatedAccount;

	}

	@Override
	public Payments deleteAnAccount(Integer paymentid) {
		Payments paymentToBeDeleted = null;
		Optional optional = payRepo.findById(paymentid);
		if (optional.isPresent()) {
			paymentToBeDeleted = payRepo.findById(paymentid).get();
			payRepo.deleteById(paymentid);
		}
		return paymentToBeDeleted;

	}

}
