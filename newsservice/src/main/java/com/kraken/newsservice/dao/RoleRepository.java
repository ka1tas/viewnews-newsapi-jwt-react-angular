package com.kraken.newsservice.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kraken.newsservice.bean.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
	
	Role findById (int id);
}
