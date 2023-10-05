package com.employee.entity;

import java.util.Date;
import java.util.*;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "EmployeeDetails")

public class Employee {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id; 
	 private String firstName;
	 private String lastName;
	 private String address;
	 private String contactNumber;
	 private String emailAddress;
	 private String taxIdentificationNumber;
	 private String bankName;
	 private String accountNumber;
	 private String routingNumber;
	 private String bankBranch;
	 private String hikeCtc;
	 private String hikeDesignation;
	 private String employeeDesignation;
	 private String department;
	 private double salary;
	 private String Transactions;
	 private Date transactionDate;
	 
	 
	 
//	 @JsonFormat( pattern= "dd-mm-yyyy")
//	 private List<Date> startdate;
//	 @JsonFormat( pattern= "dd-mm-yyyy")
//	 private List<Date> enddate;
	
	

}
