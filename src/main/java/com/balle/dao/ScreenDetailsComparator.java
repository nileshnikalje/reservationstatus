package com.balle.dao;

import java.util.Comparator;

public class ScreenDetailsComparator implements Comparator<ScreenDetails> {

	@Override
	public int compare(ScreenDetails o1, ScreenDetails o2) {
		// TODO Auto-generated method stub
		
		int platformNumber1 = Integer.parseInt(o1.getPlatformNumber());
		int platformNumber2 = Integer.parseInt(o2.getPlatformNumber());
		
		if ( platformNumber1 == platformNumber2 ) {
			int screenNumber1 = Integer.parseInt(o1.getScreenNumber());
			int screenNumber2 = Integer.parseInt(o2.getScreenNumber());
			
			if(screenNumber1 == screenNumber2) {
				return 0;
			}
			else {
				return screenNumber1 - screenNumber2;
			}
		}
		else {
			return platformNumber1 - platformNumber2;
		}
				
	}

	
	
}
