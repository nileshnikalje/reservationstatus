package com.balle.dao;

import java.io.Serializable;
import java.util.Iterator;
import java.util.List;

public class PlatformInfo implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -4739735178414453808L;
	String platform;
	List<ScreenInfo> screens;

	public List<ScreenInfo> getScreens() {
		return screens;
	}

	public void setScreens(List<ScreenInfo> screens) {
		this.screens = screens;
	}
	
	public ScreenInfo getScreen(String screen) {
		
		
		Iterator<ScreenInfo> iter = this.screens.iterator();
		
		while(iter.hasNext()) {
			ScreenInfo si = iter.next();
			if (si.getScreen().equals(screen)) {
				return si;
			}
		}
		
		return null;
	}
	
	public void modifyScreenInfo(String screen, ScreenInfo screenInfo) {
		
		boolean screenFound = false;
		for (int i = 0; i < this.screens.size(); i++) {
			ScreenInfo si = this.screens.get(i);
			if (si.getScreen().equals(screen)){
				si.setDate(screenInfo.getDate());
				si.setJourneyClass(screenInfo.getJourneyClass());
				si.setScreen(screen);
				si.setStationName(screenInfo.getStationName());
				si.setTrainName(screenInfo.getTrainName());
				si.setTrainNumber(screenInfo.getTrainNumber());
				si.setUri(screenInfo.getUri());
				screenFound = true;
				break;
			}
		}
		
		
		if (! screenFound) {
			System.out.println("screen " + screen + " not found");
			this.screens.add(new ScreenInfo(screen, screenInfo.getTrainNumber(),screenInfo.getTrainName(), screenInfo.getJourneyClass(), screenInfo.getDate(), screenInfo.stationName));
		}
		
	}
	


	public String getPlatform() {
		return platform;
	}

	public void setPlatform(String platform) {
		this.platform = platform;
	}

	public void removeScreen(String screen) {
		// TODO Auto-generated method stub
		Iterator<ScreenInfo> iter = this.screens.iterator();
		
		while(iter.hasNext()) {
			ScreenInfo si = iter.next();
			if (si.getScreen().equals(screen)) {
				iter.remove();
				break;
			}
		}
		
	}
	
}
