package com.employee.repo;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

	
	List<Employee> findByDepartment(String department);

	List<Employee> findByDepartmentAndSalaryBetween(String department, double minSalary, double maxSalary);
	
//	List<Employee> findByStartDateAndEndDate(Date startDate, Date endDate);
	
	List<Employee> findByTransactionDateBetween(Date startDate, Date endDate);
	
	
	
}
