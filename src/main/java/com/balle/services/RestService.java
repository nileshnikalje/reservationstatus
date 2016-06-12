package com.balle.services;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.balle.dao.ReservationInfo;
import com.balle.dao.TrainInfo;
import com.balle.dao.TrainInfoDataObject;
import com.balle.dao.TrainInfoResponse;
import com.google.gson.GsonBuilder;

@Path("/")
public class RestService {
	
	@GET
	@Path("/getTrainInfo/{source}")
	public String getTrainInfo(@PathParam("source") String source) {
		
		System.out.println("Inside rest webservice " + source);
		TrainInfo ti = null;
		HashMap <String,TrainInfo> data = TrainInfoDataObject.getObject();
		
		
		if (data.containsKey(source)) {
			ti = data.get(source);
		}
		else {
			
			ti = new TrainInfo("0","", "", "", "");
		}
		
		ti.setUri("/reservationstatus/rest/getResvInfo/" + ti.getTrainNumber() + "/" + ti.getJourneyClass()+"/" + ti.getDate() + "/" + ti.getStationName());
		String returnVal = new GsonBuilder().create().toJson(ti);
		System.out.println("rturn vale:" + returnVal);
		return returnVal;
	
	}
	
	
	@GET
	@Path("/getResvInfo/{trainNumber}/{journeyClass}/{date}/{station}")
	public String getReservationInfo(@PathParam("trainNumber") String trainNumber,
									 @PathParam("journeyClass") String journeyClass,
									 @PathParam("date") String date,
									 @PathParam("station") String station) {
		
		System.out.println("Inside rest webservice");
		
//		String name, String age, String gender, String pnr,
//		String toStation, String status, String coach, String berth,
//		String journeyClass;
		

		ArrayList<ReservationInfo> list = new ArrayList<>();
		try(BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream("d:\\resv.txt")))) {
			
			String line;
			

			while((line=reader.readLine()) != null) {
				System.out.println(line);
				if (line.substring(42,44).trim().equals(journeyClass)) {
				list.add(new ReservationInfo(line.substring(0,16), 
											 line.substring(17,19),
											 line.substring(16,17), 
											 line.substring(19,29),
											 line.substring(29,33), 
											 line.substring(33,37), 
											 line.substring(37,39), 
											 line.substring(39,42), 
											 line.substring(42,44)
											 ))
											 ;
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
		
		String returnVal = new GsonBuilder().create().toJson(list);
		System.out.println("rturn vale:" + returnVal);
		return returnVal;
	
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/configurePlatform/{source}/{trainNumber}/{trainName}/{journeyClass}/{date}/{station}")
	public void postData(@PathParam("source") String source,
						 @PathParam("trainNumber") String trainNumber,
						 @PathParam("trainName") String trainName,
						 @PathParam("journeyClass") String journeyClass,
						 @PathParam("date") String date,
						 @PathParam("station") String station)  {
		
				
			HashMap <String,TrainInfo> data = TrainInfoDataObject.getObject();
			
			DateTimeFormatter df = DateTimeFormatter.ofPattern("dd-MM-uuuu");
			LocalDate ld = LocalDate.parse(date, df);
			System.out.println(ld);
			String dateFormatted = ld.format(DateTimeFormatter.ofPattern("dd-MMM-uuuu")).toUpperCase();
			System.out.println(dateFormatted);
			
			
			if (data.containsKey(source)) {
				TrainInfo ti = data.get(source);
				ti.setDate(dateFormatted);
				ti.setJourneyClass(journeyClass);
				ti.setTrainNumber(trainNumber);
				ti.setStationName(station);
				ti.setTrainName(trainName);
			}
			else {
				TrainInfo ti = new TrainInfo(trainNumber,trainName, journeyClass, dateFormatted, station);
				data.put(source,ti);
			
			}
		
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/removePlatformConf/{source}")
	public void removePlatformConfData(@PathParam("source") String source) {
		HashMap <String,TrainInfo> data = TrainInfoDataObject.getObject();
		data.remove(source);
	}
	
	@GET
	@Path("/getTrainInfoByNumber/{trainNumber}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getTrainInfoByNumber(@PathParam("trainNumber") String trainNumber) {
		String returnString ;
		if(trainNumber.compareTo("12004") == 0)
			 returnString = RailwayServices.getTrainInfoByNumber(trainNumber);
		else
			 returnString = RailwayServices.getTrainInfoByNumber("12004");
		System.out.println(returnString);
		return returnString;
	}
	
	
	
}
