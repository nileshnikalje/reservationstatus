package com.balle.dao;

import java.io.Serializable;

public class TrainInfo implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8340378876497826325L;
	String 	    trainNumber;
	String		trainName;
	String		journeyClass;
	String    	date;
	String		stationName;
	String		uri;
	
	public TrainInfo(String trainNumber, String trainName,
			String journeyClass, String date, String stationName) {
		super();
		this.trainNumber 	= trainNumber;
		this.trainName 		= trainName;
		this.journeyClass 	= journeyClass;
		this.date 			= date;
		this.stationName 	= stationName;

	}

	public TrainInfo() {
		// TODO Auto-generated constructor stub
	}

	public String getUri() {
		return uri;
	}

	public void setUri(String uri) {
		this.uri = uri;
	}

	public String getTrainNumber() {
		return trainNumber;
	}

	public void setTrainNumber(String trainNumber) {
		this.trainNumber = trainNumber;
	}

	public String getTrainName() {
		return trainName;
	}

	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}

	public String getJourneyClass() {
		return journeyClass;
	}

	public void setJourneyClass(String journeyClass) {
		this.journeyClass = journeyClass;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getStationName() {
		return stationName;
	}

	public void setStationName(String stationName) {
		this.stationName = stationName;
	}
	
	
	
}
