package com.kraken.newsservice.service;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kraken.newsservice.bean.Language;
import com.kraken.newsservice.dao.LanguageRepository;

@Service
public class LanguageService {

	private static final Logger LOGGER = LoggerFactory.getLogger(LanguageService.class);

	@Autowired
	private LanguageRepository languageRepository;

	@Transactional
	public List<Language> findAllLanguages() {
		LOGGER.info("Inside of findAllLanguages() method of LanguageService");
		return languageRepository.findAll();
	}

}
