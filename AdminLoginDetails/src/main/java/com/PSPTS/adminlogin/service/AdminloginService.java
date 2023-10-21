package com.PSPTS.adminlogin.service;

import com.PSPTS.adminlogin.entities.AdminDetails;
import com.PSPTS.adminlogin.response.LoginadminResponse;


public interface AdminloginService {
	
	public AdminDetails addEmployee(AdminDetails adminDetails);

	public LoginadminResponse loginEmployee(AdminDetails adminDetails);

}
