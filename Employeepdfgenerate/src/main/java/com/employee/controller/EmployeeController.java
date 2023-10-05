package com.employee.controller;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employee.entity.Employee;
import com.employee.service.EmployeeService;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class EmployeeController {
	
	
	@Autowired
	private EmployeeService employeeService;
	
	
	 @PostMapping("/employee/add")
     public ResponseEntity<Employee> createBlog(@RequestBody Employee employee){
		return new ResponseEntity<Employee> (employeeService.addEmployee(employee),HttpStatus.OK);
	}
	 
	 
	 @GetMapping("/employee/get")
	 public ResponseEntity <List<Employee>> generator() throws IOException {
		 List<Employee> EmployeeList = employeeService.getAllEmployee();
		return new ResponseEntity<>(EmployeeList,HttpStatus.OK);
	 }
	
	 
	 
	 
	 @GetMapping("/employee/get/{employeeId}")
	 public ResponseEntity<Employee> generator(@PathVariable Long employeeId, HttpServletResponse response) throws IOException {
		 Employee employee = employeeService.getEmployeeById(employeeId);
		 
		 return new ResponseEntity<Employee>(employee,HttpStatus.OK);
	 }
	 
	 
	 
	 
	 @GetMapping("/employee/get-by-department/{department}")
	 public ResponseEntity<List<Employee>> getEmployeesByDepartment(@PathVariable String department) throws IOException {
	     List<Employee> employeeList = employeeService.getEmployeesByDepartment(department);
	     return new ResponseEntity<>(employeeList, HttpStatus.OK);
	 }

	 
	 
	 
	 
	 @GetMapping("/employee/get-by-department-and-salary/{department}/{minSalary}/{maxSalary}")
	 public ResponseEntity<List<Employee>> getEmployeesByDepartmentAndSalary(
	     @PathVariable String department, @PathVariable double minSalary, @PathVariable double maxSalary) throws IOException {
	     
	     List<Employee> filteredEmployees = employeeService.getEmployeesByDepartmentAndSalaryRange(
	         department, minSalary, maxSalary);

	     return new ResponseEntity<>(filteredEmployees, HttpStatus.OK);
	 }


	 
	 
//	 @GetMapping("/employee/get-by-hire-date-range/{startDate}/{endDate}")
//	 public List<Employee> getEmployeesByHireDateRange(
//	     @PathVariable("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
//	     @PathVariable("endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
//	     return employeeService.findByTransactionDateBetween(startDate, endDate);
//	 }
	 
	 
	 @GetMapping("/employee/get-by-hire-date-range/{startDate}/{endDate}")
	 public List<Employee> getEmployeesByHireDateRange(
	     @PathVariable("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
	     @PathVariable("endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
	     List<Employee> empDate = employeeService.findByTransactionDateBetween(startDate, endDate);
	     return empDate;
	 }
	 
}
