package com.PSPTS.adminlogin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PSPTS.adminlogin.entities.AdminDetails;
import com.PSPTS.adminlogin.response.LoginadminResponse;
import com.PSPTS.adminlogin.service.AdminloginService;



@RestController
@RequestMapping("/admin/login")
public class AdminLoginController {
	
	@Autowired
	private AdminloginService adminloginService;
	
	@PostMapping("/save")
	public AdminDetails saveEmployee(@RequestBody  AdminDetails adminDetails) {
		return adminloginService.addEmployee(adminDetails);
	}
	
	
	@GetMapping("/login")
	public ResponseEntity<?> loginEmployee(@RequestBody AdminDetails adminDetails)
	{
		LoginadminResponse loginadminResponse=adminloginService.loginEmployee(adminDetails);
		return  ResponseEntity.ok(loginadminResponse);
	}
	
	

}
