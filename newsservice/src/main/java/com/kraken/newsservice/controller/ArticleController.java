package com.kraken.newsservice.controller;

import com.kraken.newsservice.bean.Article;
import com.kraken.newsservice.bean.ArticleStatus;
import com.kraken.newsservice.bean.UserArticle;
import com.kraken.newsservice.service.ArticleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/article")
@CrossOrigin
public class ArticleController extends ExceptionController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ArticleController.class);

	@Autowired
	private ArticleService articleService;

	@PostMapping("/favourite")
	public ArticleStatus saveFav(@RequestBody UserArticle article) {
		LOGGER.info("Inside of savefav() method of ArticleController");
		return articleService.save(article);
	}

	@PostMapping("/showfavourite")
	public List<Article> saveFav(@RequestBody int userId) {
		LOGGER.info("Inside of savefav() method of ArticleController");
		return articleService.findFavArticle(userId);
	}

	@DeleteMapping("/favourite")
	public boolean deleteFav(@RequestBody int artId) {
		LOGGER.info("Inside of deletefav() method of ArticleController");
		boolean status = false;
		articleService.deleteArticle(artId);
		status = true;
		return status;
	}

}
