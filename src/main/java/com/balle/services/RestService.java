package com.balle.services; // modified for git -- for 3 way merge -- now for ending changes for master


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
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

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

	
	Map<String,String> loggedInUsers = new HashMap<>();
	
	@GET
	@Path("/getScreenConfig")
	public String getScreenConfig() throws IOException {

		HashMap<String, TrainInfo> data = new ConfigUtils().getConfigData().trainInfoData;

		String returnVal = new GsonBuilder().create().toJson(data);
		System.out.println("rturn vale:" + returnVal);
		return returnVal;

	}
	
	
	
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
				//System.out.println(line);
//				if (line.substring(42, 44).trim().equals(journeyClass)) {
//					list.add(new ReservationInfo(line.substring(0, 16), line
//							.substring(17, 19), line.substring(16, 17), line
//							.substring(19, 29), line.substring(29, 33), line
//							.substring(33, 37), line.substring(37, 39), line
//							.substring(39, 42), line.substring(42, 44)));
//				}				
				
				if (line.substring(49, 51).trim().equals(journeyClass)) {
					list.add(new ReservationInfo(
							line.substring(6, 21), 
							line.substring(22, 24), //age
							line.substring(21, 22), //gender
							line.substring(24, 34), //pnr
							line.substring(34, 38), //tostation
							line.substring(38, 42), //status
							line.substring(42, 46), //coach
							line.substring(46, 49), //berth
							line.substring(49, 51), //class
							line.substring(2, 6), //wl number
							line.substring(1, 2)  //booking status
					));
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		Collections.sort(list);
		
		String returnVal = new GsonBuilder().create().toJson(list);
		//System.out.println("rturn vale:" + returnVal);
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
			@PathParam("station") String station) throws IOException {

		ConfigUtils configUtils = new ConfigUtils();
		ConfigData  configData = configUtils.getConfigData();
		HashMap<String, TrainInfo> data = configData.trainInfoData;
		
		if (data == null) {
			System.out.println("Data is null");
			data = new HashMap<String, TrainInfo>();
			configData.trainInfoData = data;
			configUtils.writeConfigData(configData);
			
		}
		
		String dateFormatted = null;
		if (date != null) {
			DateTimeFormatter df = DateTimeFormatter.ofPattern("dd-MM-uuuu");
			LocalDate ld = LocalDate.parse(date, df);
			System.out.println(ld);
			dateFormatted = ld.format(
					DateTimeFormatter.ofPattern("dd-MMM-uuuu")).toUpperCase();
			System.out.println(dateFormatted);
		}

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
			trainInfoData.put(source, new TrainInfo());
			//trainInfoData.remove(source);
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

		return returnString;
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/validateUser/{userName}/{password}")
	public String validatePassword(@PathParam("userName") String userName,
			@PathParam("password") String password) throws IOException {


		ConfigData cd = new ConfigUtils().getConfigData();
		boolean isUserValid = false;

		Iterator<UserDetails> i = cd.users.iterator();
		while (i.hasNext()) {

			UserDetails ud = i.next();
			System.out.println("iterator : " + ud.getUserName());
			if (ud.getUserName().equals(userName)
					&& ud.getPassword().equals(password)) {
				isUserValid = true;
				loggedInUsers.put(userName, userName);
			}
		}

//		if (isUserValid && userName.equals("admin")
//				&& password.equals("password")) {
//			return ("{\"code\" : \"501\"}");
//		}

		if (!isUserValid) {
			return ("{\"code\" : \"502\"}");
		}

		return ("{\"code\" : \"500\"}");

	}

	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/changePassword/{userName}/{currentPassword}/{newPassword}")
	public String changePassword(@PathParam("userName") String userName,
								 @PathParam("currentPassword") String currentPassword,
								 @PathParam("newPassword") String newPassword) throws IOException {



		ConfigUtils configUtils = new ConfigUtils();
		ConfigData cd = configUtils.getConfigData();
		boolean isUserValid = false;

		Iterator<UserDetails> i = cd.users.iterator();
		while (i.hasNext()) {

			UserDetails ud = i.next();

			if ( ud.getUserName().equals(userName) && ud.getPassword().equals(currentPassword)) {
				isUserValid = true;
				ud.setPassword(newPassword);
				configUtils.writeConfigData(cd);
				return ("{\"code\" : \"500\"}");
			}
		}



		return ("{\"code\" : \"502\"}");

		
	}
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/logoutuser/{userName}")
	public void logout(@PathParam("userName") String userName) throws IOException {
		System.out.println("Came for logging out : " + userName);
		loggedInUsers.remove(userName);
	}	
	
	
	
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/isUserActive/{userName}")
	public String isUserActive(@PathParam("userName") String userName) {
		if (loggedInUsers.containsKey(userName))
			return "Y";
		else
			return "N";
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
		postData(screenDetails.getScreenIdentifier(), null, null, null, null, null);

	}

	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/removeScreen/{screenIdentifier}")
	public void removeScreen(@PathParam("screenIdentifier") String screenIdentifier) throws IOException {

		System.out.println("removing " + screenIdentifier );

		ConfigUtils utils = new ConfigUtils();
		ConfigData configData = utils.getConfigData();
		

		ScreenDetails screenDetails = null;

		
		if (configData.screens != null) {
			// screens is not a null list
			Iterator<ScreenDetails> i = configData.screens.iterator();

			while (i.hasNext()) {
				ScreenDetails sd =  i.next();
				if (sd.getScreenIdentifier().equals(screenIdentifier) ) {
					i.remove();
					
					HashMap<String, TrainInfo> trainInfoData = configData.trainInfoData;
					
					if (trainInfoData != null && trainInfoData.containsKey(screenIdentifier)) {
						trainInfoData.remove(screenIdentifier);
						configData.trainInfoData = trainInfoData;
					}					
					
					
					utils.writeConfigData(configData);
									
					break;
				}
			}

		}
		


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
	
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getUsers")
	public String getUsers() throws IOException {

		ConfigData cd = new ConfigUtils().getConfigData();
		System.out.println("output:" + new GsonBuilder().create().toJson(cd.users));
		return new GsonBuilder().create().toJson(cd.users);

	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/addUser/{userName}/{password}")
	public void addUser(@PathParam("userName") String userName, 
						   @PathParam("password") String password) throws IOException {

		ConfigUtils configUtils = new ConfigUtils();
		ConfigData cd = configUtils.getConfigData();
		List<UserDetails> users = cd.users;
		boolean userFound = false;
		System.out.println("username + " + userName);
		
		Iterator<UserDetails> iter = users.iterator();
		UserDetails userDetails = null;
		while(iter.hasNext()) {
			userDetails = iter.next();
			System.out.println(userDetails.getUserName());
			if (userDetails.getUserName().equals(userName)) {
				userDetails.setPassword(password);
				userFound = true;
				break;
			}
		}
		
		if (!userFound) {
			users.add(new UserDetails(userName,password));
		}
		cd.users = users;
		configUtils.writeConfigData(cd);

	}




	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/deleteUser/{userName}")
	public void deleteUser(@PathParam("userName") String userName) throws IOException {
	
		ConfigUtils configUtils = new ConfigUtils();
		ConfigData cd = configUtils.getConfigData();
		List<UserDetails> users = cd.users;
		boolean userFound = false;
		System.out.println("username + " + userName);
		
		Iterator<UserDetails> iter = users.iterator();
		UserDetails userDetails = null;
		while(iter.hasNext()) {
			userDetails = iter.next();
			System.out.println(userDetails.getUserName());
			if (userDetails.getUserName().equals(userName)) {
				iter.remove();
				break;
			}
		}
		
		cd.users = users;
		configUtils.writeConfigData(cd);
	
	}

}

