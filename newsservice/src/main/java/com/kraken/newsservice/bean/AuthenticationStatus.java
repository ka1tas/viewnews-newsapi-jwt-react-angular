package com.kraken.newsservice.bean;

public class AuthenticationStatus {

	private boolean authStatus;
	private String token;
	private boolean isblocked;
	private User user;

	

	public AuthenticationStatus() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	

	public AuthenticationStatus(boolean authStatus, String token, boolean isblocked, User user) {
		super();
		this.authStatus = authStatus;
		this.token = token;
		this.isblocked = isblocked;
		this.user = user;
	}





	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public boolean isIsblocked() {
		return isblocked;
	}

	public void setIsblocked(boolean isblocked) {
		this.isblocked = isblocked;
	}

	public boolean isAuthStatus() {
		return authStatus;
	}

	public void setAuthStatus(boolean authStatus) {
		this.authStatus = authStatus;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}





	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (authStatus ? 1231 : 1237);
		result = prime * result + (isblocked ? 1231 : 1237);
		result = prime * result + ((token == null) ? 0 : token.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		return result;
	}





	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AuthenticationStatus other = (AuthenticationStatus) obj;
		if (authStatus != other.authStatus)
			return false;
		if (isblocked != other.isblocked)
			return false;
		if (token == null) {
			if (other.token != null)
				return false;
		} else if (!token.equals(other.token))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}





	@Override
	public String toString() {
		return "AuthenticationStatus [authStatus=" + authStatus + ", token=" + token + ", isblocked=" + isblocked
				+ ", user=" + user + "]";
	}

	
	
	
	


}
