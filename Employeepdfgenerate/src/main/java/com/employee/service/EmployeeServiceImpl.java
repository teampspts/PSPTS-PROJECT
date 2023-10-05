package com.employee.service;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.Employee;
import com.employee.repo.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeerepository;
	
	
	@Override
	public Employee addEmployee(Employee employee) {
		// TODO Auto-generated method stub
	return employeerepository.save(employee);
	}

	@Override
	public List<Employee> getAllEmployee() {
		
		return employeerepository.findAll();
	}

	@Override
	public Employee getEmployeeById(Long id) {
		
		return employeerepository.findById(id).get() ;
	}

	@Override
	public List<Employee> getEmployeesByDepartment(String department) {
		
		return employeerepository.findByDepartment(department);
	}

	@Override
	public List<Employee> getEmployeesByDepartmentAndSalaryRange(String department, double minSalary,
			double maxSalary) {
		
		return employeerepository.findByDepartmentAndSalaryBetween(department, minSalary, maxSalary);
	}

	@Override
	public List<Employee> findByTransactionDateBetween(Date startDate, Date endDate) {
		
		
		
		return employeerepository.findByTransactionDateBetween(startDate, endDate);
	}

//	@Override
//	public List<Employee> findByStartDateAndEndDate(Date startDate, Date endDate) {
//		// TODO Auto-generated method stub
//		return null;
//	}

	
	
	
}
