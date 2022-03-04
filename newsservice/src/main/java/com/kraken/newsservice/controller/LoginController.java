package com.kraken.newsservice.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.kraken.newsservice.bean.AuthenticationStatus;
import com.kraken.newsservice.bean.User;
import com.kraken.newsservice.jwt.security.JwtGenerator;
import com.kraken.newsservice.service.UserService;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController extends ExceptionController {

	private static final Logger LOGGER = LoggerFactory.getLogger(SignUpController.class);

	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtGenerator jwtGenerator;

	@PostMapping("/authenticate")
	public AuthenticationStatus signup(@RequestBody User user) {
		LOGGER.info("Inside of signup() method of SignUpController");
		System.out.println("User in Login" + user);
		
		AuthenticationStatus status =  userService.login(user);

		if (status.isAuthStatus()) {
			status.setToken(jwtGenerator.generate(status.getUser()));
			LOGGER.debug("Token : {}", status.getToken());
		}
		return status;
	}

}
