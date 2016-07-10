package com.balle.dao;


public class ReservationInfo implements Comparable<ReservationInfo>{
	String name;
	String age;
	String gender;
	String pnr;
	String toStation;
	String status;
	String coach;
	String berth;
	String journeyClass;
	String waitListNumber;
	String bookingStatus;

	public String getWaitListNumber() {
		return waitListNumber;
	}

	public void setWaitListNumber(String waitListNumber) {
		this.waitListNumber = waitListNumber;
	}

	public String getBookingStatus() {
		return bookingStatus;
	}

	public void setBookingStatus(String bookingStatus) {
		this.bookingStatus = bookingStatus;
	}

	public ReservationInfo(String name, String age, String gender, String pnr,
			String toStation, String status, String coach, String berth,
			String journeyClass) {
		super();
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.pnr = pnr;
		this.toStation = toStation;
		this.status = status;
		this.coach = coach;
		this.berth = berth;
		this.journeyClass = journeyClass;
	}

	public ReservationInfo(String name, String age, String gender, String pnr,
			String toStation, String status, String coach, String berth,
			String journeyClass, String waitListNumber, String bookingStatus) {
		super();
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.pnr = pnr;
		this.toStation = toStation;
		this.status = status;
		this.coach = coach;
		this.berth = berth;
		this.journeyClass = journeyClass;
		if (bookingStatus.equals("W")) {
			this.bookingStatus = "WL";
		}
		if (bookingStatus.equals("R")) {
			this.bookingStatus = "RAC";
		}
		this.waitListNumber = waitListNumber.trim();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPnr() {
		return pnr;
	}

	public void setPnr(String pnr) {
		this.pnr = pnr;
	}

	public String getToStation() {
		return toStation;
	}

	public void setToStation(String toStation) {
		this.toStation = toStation;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCoach() {
		return coach;
	}

	public void setCoach(String coach) {
		this.coach = coach;
	}

	public String getBerth() {
		return berth;
	}

	public void setBerth(String berth) {
		this.berth = berth;
	}

	public String getJourneyClass() {
		return journeyClass;
	}

	public void setJourneyClass(String journeyClass) {
		this.journeyClass = journeyClass;
	}

	@Override
	public int compareTo(ReservationInfo o) {
		// TODO Auto-generated method stub
		
		if (this.bookingStatus.compareTo(o.bookingStatus) == 0) {
			
			if (Integer.parseInt(this.waitListNumber) > Integer.parseInt(o.waitListNumber)) {
				return 1;
			}
			if (Integer.parseInt(this.waitListNumber) < Integer.parseInt(o.waitListNumber)) {
				return -1;
			}
			else {
				return 0;
			}
		}
		
		return (this.bookingStatus.compareTo(o.bookingStatus));
	}

}
