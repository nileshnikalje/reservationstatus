package com.balle.dao;

import java.io.Serializable;

public class UserDetails implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -5650869737867583638L;

	public UserDetails(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}

	private String userName;
	private String password;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
