package com.employee.service;

import java.util.Date;
import java.util.List;

import com.employee.entity.Employee;



public interface EmployeeService  {
	
public Employee addEmployee(Employee employee);
	
	public List<Employee> getAllEmployee();
	
	public Employee getEmployeeById(Long id);
	
	public List<Employee> getEmployeesByDepartment(String department);
	
	List<Employee> getEmployeesByDepartmentAndSalaryRange(
	        String department, double minSalary, double maxSalary
			
	);
	
	List<Employee> findByTransactionDateBetween(Date startDate, Date endDate);

	
//	List<Employee> findByStartDateAndEndDate(Date startDate, Date endDate);
	
	

}
