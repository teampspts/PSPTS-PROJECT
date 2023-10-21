package com.PSPTS.adminlogin.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PSPTS.adminlogin.entities.AdminDetails;
import com.PSPTS.adminlogin.repo.AdmindetailsRepo;
import com.PSPTS.adminlogin.response.LoginadminResponse;

@Service
public class AdminloginServiceImpl implements AdminloginService {
	
	
	@Autowired
	private AdmindetailsRepo admindetailsRepo; 
	
	
	@Override
	public AdminDetails addEmployee(AdminDetails adminDetails) {	
		return admindetailsRepo.save(adminDetails);
	}
		
	@Override
	public LoginadminResponse loginEmployee(AdminDetails adminDetails) {
//	        AdminDetails emp=admindetailsRepo.findByEmail(adminDetails.getEmail());
	        AdminDetails emp=admindetailsRepo.findByuserId(adminDetails.getUserId());
	        if (emp != null) {
	            String password = adminDetails.getPassword();
				Boolean isPwdRight = password.matches(password);
	            if (isPwdRight) {
	                Optional<AdminDetails> employee = admindetailsRepo.findOneByuserIdAndPassword(adminDetails.getUserId(),password );
	                if (employee.isPresent()) {
	                    return new LoginadminResponse("Login Success", true);
	                } else {
	                    return new LoginadminResponse("Login Failed", false);
	                }
	            } else {
	 
	                return new LoginadminResponse("password Not Match", false);
	            }
	        }else {
	            return new LoginadminResponse("UserID does not exits", false);
	        }
	}
	
}
