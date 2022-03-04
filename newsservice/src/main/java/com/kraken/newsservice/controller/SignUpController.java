package com.kraken.newsservice.controller;

import com.kraken.newsservice.bean.Language;
import com.kraken.newsservice.bean.Role;
import com.kraken.newsservice.bean.SignUpStatus;
import com.kraken.newsservice.bean.User;
import com.kraken.newsservice.service.LanguageService;
import com.kraken.newsservice.service.RoleService;
import com.kraken.newsservice.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/signup")
@CrossOrigin
public class SignUpController extends ExceptionController {

	private static final Logger LOGGER = LoggerFactory.getLogger(SignUpController.class);

	@Autowired
	private UserService userService;

	@Autowired
	private LanguageService languageService;

	@Autowired
	private RoleService roleService;

	@PostMapping("/add")
	public SignUpStatus signup(@RequestBody User user) {
		LOGGER.info("Inside of signup() method of SignUpController");
		System.out.println("User in ciokjhui" + user);
		return userService.save(user);
	}



	@GetMapping("/languages")
	public List<Language> getLanguages() {
		LOGGER.info("Inside of getLanguages() method of SignUpController");
		return languageService.findAllLanguages();
	}

	@GetMapping("/roles")
	public List<Role> getRoles() {
		LOGGER.info("Inside of getLanguages() method of SignUpController");
		return roleService.findAllRoles();
	}

}
