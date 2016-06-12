package com.balle.dao;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.annotations.SerializedName;

public class TrainInfoResponse {

	@SerializedName("response_code")
	public Integer responseCode;
	
	
	public List<Train> trains = new ArrayList<Train>();

}