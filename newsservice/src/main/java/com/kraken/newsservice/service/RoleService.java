package com.kraken.newsservice.service;

import com.kraken.newsservice.bean.Role;
import com.kraken.newsservice.dao.RoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class RoleService {

	private static final Logger LOGGER = LoggerFactory.getLogger(RoleService.class);

	@Autowired
	private RoleRepository roleRepository;

	@Transactional
	public List<Role> findAllRoles() {
		LOGGER.info("Inside of findAllRoles() method of RoleService");
		return roleRepository.findAll();
	}

}
