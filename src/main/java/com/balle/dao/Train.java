package com.balle.dao;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.annotations.SerializedName;


public class Train {

	public String number;
	public String name;
	@SerializedName("full_name")
	public String fullName;
	public List<Day> days = new ArrayList<Day>();
	public List<Class> classes = new ArrayList<Class>();
	public String pantry;
	public List<Object> route = new ArrayList<Object>();

}