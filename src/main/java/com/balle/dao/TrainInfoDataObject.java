package com.balle.dao;

import java.util.HashMap;

public class TrainInfoDataObject {
	private static HashMap<String,TrainInfo> map = null;
	public static HashMap<String, TrainInfo> getObject() {
		if (map == null) {
			map = new HashMap<String,TrainInfo>();
		
		}
		return map;
	}
	
	private TrainInfoDataObject() {
		
	}
	
	
}
