package com.balle.services;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.balle.dao.ReservationInfo;
import com.balle.dao.ScreenDetails;
import com.balle.dao.ScreenDetailsComparator;
import com.balle.dao.TrainInfo;
import com.balle.dao.UserDetails;
import com.balle.utils.ConfigData;
import com.balle.utils.ConfigUtils;
import com.google.gson.GsonBuilder;

@Path("/")
public class RestService {

	@GET
	@Path("/getTrainInfo/{source}")
	public String getTrainInfo(@PathParam("source") String source) throws IOException {

		System.out.println("Inside rest webservice " + source);
		TrainInfo ti = null;
		HashMap<String, TrainInfo> data = new ConfigUtils().getConfigData().trainInfoData;

		if (data != null && data.containsKey(source)) {
			ti = data.get(source);
		} else {

			ti = new TrainInfo("0", "", "", "", "");
		}

		ti.setUri("/reservationstatus/rest/getResvInfo/" + ti.getTrainNumber()
				+ "/" + ti.getJourneyClass() + "/" + ti.getDate() + "/"
				+ ti.getStationName());
		String returnVal = new GsonBuilder().create().toJson(ti);
		System.out.println("rturn vale:" + returnVal);
		return returnVal;

	}

	@GET
	@Path("/getResvInfo/{trainNumber}/{journeyClass}/{date}/{station}")
	public String getReservationInfo(
			@PathParam("trainNumber") String trainNumber,
			@PathParam("journeyClass") String journeyClass,
			@PathParam("date") String date, @PathParam("station") String station) {

		System.out.println("Inside rest webservice");

		// String name, String age, String gender, String pnr,
		// String toStation, String status, String coach, String berth,
		// String journeyClass;

		ArrayList<ReservationInfo> list = new ArrayList<>();
		try (BufferedReader reader = new BufferedReader(new InputStreamReader(
				new FileInputStream("d:\\resv.txt")))) {

			String line;

			while ((line = reader.readLine()) != null) {
				System.out.println(line);
				if (line.substring(42, 44).trim().equals(journeyClass)) {
					list.add(new ReservationInfo(line.substring(0, 16), line
							.substring(17, 19), line.substring(16, 17), line
							.substring(19, 29), line.substring(29, 33), line
							.substring(33, 37), line.substring(37, 39), line
							.substring(39, 42), line.substring(42, 44)));
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
			@PathParam("date") String date, @PathParam("station") String station) throws IOException {

		ConfigUtils configUtils = new ConfigUtils();
		ConfigData  configData = configUtils.getConfigData();
		HashMap<String, TrainInfo> data = configData.trainInfoData;
		
		if (data == null) {
			System.out.println("Data is null");
			data = new HashMap<String, TrainInfo>();
			configData.trainInfoData = data;
			configUtils.writeConfigData(configData);
			
		}
		

		DateTimeFormatter df = DateTimeFormatter.ofPattern("dd-MM-uuuu");
		LocalDate ld = LocalDate.parse(date, df);
		System.out.println(ld);
		String dateFormatted = ld.format(
				DateTimeFormatter.ofPattern("dd-MMM-uuuu")).toUpperCase();
		System.out.println(dateFormatted);

		if (data.containsKey(source)) {
			System.out.println("Data contains Key");
			TrainInfo ti = data.get(source);
			ti.setDate(dateFormatted);
			ti.setJourneyClass(journeyClass);
			ti.setTrainNumber(trainNumber);
			ti.setStationName(station);
			ti.setTrainName(trainName);
			data.put(source, ti);
			configData.trainInfoData = data;
			configUtils.writeConfigData(configData);
			
		} else {
			System.out.println("Data does contains Key");
			TrainInfo ti = new TrainInfo(trainNumber, trainName, journeyClass,
					dateFormatted, station);
			data.put(source, ti);
			configData.trainInfoData = data;
			configUtils.writeConfigData(configData);

		}

	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/removePlatformConf/{source}")
	public void removePlatformConfigurationData(@PathParam("source") String source) throws IOException {
		ConfigUtils configUtils = new ConfigUtils();
		ConfigData configData = configUtils.getConfigData();
		
		HashMap<String, TrainInfo> trainInfoData = configData.trainInfoData;
		
		if (trainInfoData != null && trainInfoData.containsKey(source)) {
			trainInfoData.remove(source);
			configData.trainInfoData = trainInfoData;
			configUtils.writeConfigData(configData);
		}
		
	}

	@GET
	@Path("/getTrainInfoByNumber/{trainNumber}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getTrainInfoByNumber(
			@PathParam("trainNumber") String trainNumber) {
		String returnString;
		if (trainNumber.compareTo("12004") == 0)
			returnString = RailwayServices.getTrainInfoByNumber(trainNumber);
		else
			returnString = RailwayServices.getTrainInfoByNumber("12004");
		System.out.println(returnString);
		return returnString;
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/validateUser/{userName}/{password}")
	public String validatePassword(@PathParam("userName") String userName,
			@PathParam("password") String password) throws IOException {

		System.out.println("Inside rs");

		ConfigData cd = new ConfigUtils().getConfigData();
		boolean isUserValid = false;

		Iterator<UserDetails> i = cd.users.iterator();
		while (i.hasNext()) {

			UserDetails ud = i.next();
			System.out.println("iterator : " + ud.getUserName());
			if (ud.getUserName().equals(userName)
					&& ud.getPassword().equals(password)) {
				isUserValid = true;
			}
		}

		if (isUserValid && userName.equals("admin")
				&& password.equals("password")) {
			return ("{\"code\" : \"501\"}");
		}

		if (!isUserValid) {
			return ("{\"code\" : \"502\"}");
		}

		return ("{\"code\" : \"500\"}");

	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/addScreen/{platformNumber}/{screenNumber}")
	public void addScreens(@PathParam("platformNumber") String platformNumber,
			@PathParam("screenNumber") String screenNumber) throws IOException {

		System.out.println("Adding " + platformNumber + "-" + screenNumber);

		ConfigUtils utils = new ConfigUtils();
		ConfigData configData = utils.getConfigData();
		

		ScreenDetails screenDetails = null;

		
		if (configData.screens == null) {
			System.out.println("platforms is null");
			configData.screens = new ArrayList<ScreenDetails>();
			screenDetails = new ScreenDetails(platformNumber, screenNumber);
			configData.screens.add(screenDetails);
		} else {
			// screens is not a null list
			Iterator<ScreenDetails> i = configData.screens.iterator();

			while (i.hasNext()) {
				ScreenDetails sd =  i.next();
				if (sd.getPlatformNumber().equals(platformNumber) && sd.getScreenNumber().equals(screenNumber)) {
					screenDetails = sd;
					break;
				}
			}
			
			if (screenDetails == null) {
				screenDetails = new  ScreenDetails(platformNumber, screenNumber);
				configData.screens.add(screenDetails);
			}
			
		}
		
		utils.writeConfigData(configData);

	}

	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getPlatforms")
	public String getPlatforms() throws IOException {

		ConfigData cd = new ConfigUtils().getConfigData();
		Collections.sort(cd.screens, new ScreenDetailsComparator());
		System.out.println("output:" + new GsonBuilder().create().toJson(cd.screens));
		return new GsonBuilder().create().toJson(cd.screens);

	}

}
