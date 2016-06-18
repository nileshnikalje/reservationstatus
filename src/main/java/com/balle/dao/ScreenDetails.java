package com.balle.dao;

import java.io.Serializable;
public class ScreenDetails implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 291702436311220916L;

	private String platformNumber;

	private String screenIdentifier;

	private String screenNumber;
	
	private String screenName;
	
	public ScreenDetails(String platformNumber, String screenNumber) {
		super();
		this.platformNumber = platformNumber;
		this.screenNumber = screenNumber;
		setScreenIdentifier();
		setScreenName();
		
		
	}

	
	
	public String getPlatformNumber() {
		return platformNumber;
	}
	public void setPlatformNumber(String platformNumber) {
		this.platformNumber = platformNumber;
		setScreenIdentifier();
		setScreenName();
	}



	public String getScreenNumber() {
		return screenNumber;
	}
	public void setScreenNumber(String screenNumber) {
		this.screenNumber = screenNumber;
		setScreenIdentifier();
		setScreenName();
	}
	public String getScreenIdentifier() {
		return screenIdentifier;
	}
	public void setScreenIdentifier() {
		this.screenIdentifier = "platform" + String.format("%2s" ,platformNumber).replace(" ","0") + 
				"screen" + String.format("%2s" ,screenNumber).replace(" ","0");
	}

	public void setScreenName() {
		this.screenName = "Platform " + platformNumber + " - Screen " + screenNumber;
	}



	public String getScreenName() {
		return screenName;
	}
	
}
