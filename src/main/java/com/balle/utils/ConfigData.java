package com.balle.utils;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.balle.dao.ScreenDetails;
import com.balle.dao.TrainInfo;
import com.balle.dao.UserDetails;



public class ConfigData implements Serializable{
	public ArrayList<UserDetails> users;
	public List<ScreenDetails> screens;
	public HashMap<String, TrainInfo> trainInfoData;
	private static final long serialVersionUID = 5462223600l;
	
}
