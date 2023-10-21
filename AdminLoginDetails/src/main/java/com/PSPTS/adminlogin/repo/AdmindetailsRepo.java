package com.PSPTS.adminlogin.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PSPTS.adminlogin.entities.AdminDetails;

public interface AdmindetailsRepo extends JpaRepository<AdminDetails, String>{
	
	
	Optional<AdminDetails> findOneByuserIdAndPassword(String userId, String password);
	 
    AdminDetails findByuserId(String userId);

}
