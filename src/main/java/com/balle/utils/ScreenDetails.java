package com.balle.utils;

import java.io.Serializable;

public class ScreenDetails implements Serializable{

	/**
	 * 
	 */
	//private static final long serialVersionUID = 291702436311220916L;
	
	private String platformNumber;
	private String screenIdentifier;
	private String screenNumber;
	
	
	public ScreenDetails() {
	}	
	
	public ScreenDetails(String platformNumber, String screenNumber) {
		super();
		this.platformNumber = platformNumber;
		this.screenNumber = screenNumber;
	}

	
	
	public String getPlatformNumber() {
		return platformNumber;
	}
	public void setPlatformNumber(String platformNumber) {
		this.platformNumber = platformNumber;
	}



	public String getScreenNumber() {
		return screenNumber;
	}
	public void setScreenNumber(String screenNumber) {
		this.screenNumber = screenNumber;
	}
	public String getScreenIdentifier() {
		return screenIdentifier;
	}
	public void setScreenIdentifier(String screenIdentifier) {
		this.screenIdentifier = screenIdentifier;
	}

}
