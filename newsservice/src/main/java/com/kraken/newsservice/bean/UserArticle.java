package com.kraken.newsservice.bean;

public class UserArticle {

	private Article article;
	private int userId;

	
	
	public UserArticle(Article article, int userId) {
		super();
		this.article = article;
		this.userId = userId;
	}

	public UserArticle() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "UserArticle [article=" + article + ", userId=" + userId + "]";
	}



}
