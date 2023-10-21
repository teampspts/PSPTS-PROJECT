package com.PSPTS.adminlogin.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="admin_details")
public class AdminDetails {
	
	@Id
	private String userId;
	private String username;
	private String email;
	private String password;

}
