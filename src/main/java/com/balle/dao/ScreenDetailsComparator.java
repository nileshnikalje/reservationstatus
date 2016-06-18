package com.balle.dao;

import java.util.Comparator;

public class ScreenDetailsComparator implements Comparator<ScreenDetails> {

	@Override
	public int compare(ScreenDetails o1, ScreenDetails o2) {
		// TODO Auto-generated method stub
		
		if (o1.getPlatformNumber().compareTo(o2.getPlatformNumber()) == 0 )
			return (o1.getScreenNumber().compareTo(o2.getScreenNumber()));
		else
			return o1.getPlatformNumber().compareTo(o2.getPlatformNumber());
		

	}

}
