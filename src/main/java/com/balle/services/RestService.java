package com.balle.services; // modified for git -- for 3 way merge -- now for ending changes for master


import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.balle.dao.PlatformInfo;
import com.balle.comms.ComPortSendReceive;
import com.balle.comms.ReaderWriter;
import com.balle.dao.ReservationInfo;
import com.balle.dao.ScreenDetails;
import com.balle.dao.ScreenDetailsComparator;
import com.balle.dao.ScreenInfo;
import com.balle.dao.TrainInfo;
import com.balle.dao.UserDetails;
import com.balle.utils.ConfigData;
import com.balle.utils.ConfigUtils;
import com.balle.utils.ReservationConstants;
import com.google.gson.GsonBuilder;

@Path("/")
public class RestService {

	
	Map<String,String> loggedInUsers = new HashMap<>();
	
	@GET
	@Path("/getScreenConfig/{platform}")
	public String getScreenConfig(@PathParam("platform") String platform) throws IOException {

		HashMap<String, PlatformInfo> data = new ConfigUtils().getConfigData().trainInfoData;
		
		String returnVal = new GsonBuilder().create().toJson(data.get(platform));
		System.out.println("rturn vale:" + returnVal);
		return returnVal;

	}
	
	@GET
	@Path("/getScreens/{platform}")
	public String getScreensForPlatform(@PathParam("platform") String platform ) throws IOException {
		

		
		HashMap<String, PlatformInfo> data = new ConfigUtils().getConfigData().trainInfoData;
		PlatformInfo platformInfo = data.get(platform);
		
		
		String returnVal = new GsonBuilder().create().toJson(platformInfo.getScreens());
		System.out.println("Screens List:" + returnVal);
		return returnVal;
	}
	
	
	@GET
	@Path("/getTrainInfo/{platform}/{screen}")
	public String getTrainInfo(@PathParam("platform") String platform, 
			@PathParam("screen") String screen) throws IOException {

		
		ScreenInfo screenInfo = null;
		HashMap<String, PlatformInfo> data = new ConfigUtils().getConfigData().trainInfoData;

		if (data != null && data.containsKey(platform)) {

			ScreenInfo si = data.get(platform).getScreen(screen);
			
			if (si == null) {
				screenInfo = new ScreenInfo("0","0",null,null,null,null);
			}
			else {
				screenInfo = si;
			}

		} else {

			screenInfo = new ScreenInfo("0","0",null,null,null,null);
		}

		screenInfo.setUri("/reservationstatus/rest/getResvInfo/" + screenInfo.getTrainNumber()
				+ "/" + screenInfo.getJourneyClass() + "/" + screenInfo.getDate() + "/"
				+ screenInfo.getStationName());
		String returnVal = new GsonBuilder().create().toJson(screenInfo);
		System.out.println("return vale:" + returnVal);
		return returnVal;

	}

	@GET
	@Path("/getNumberOfPlatforms")
	public String getNumberOfPlatforms() throws IOException {

			HashMap<String, PlatformInfo> data = new ConfigUtils().getConfigData().trainInfoData;
			
			Set<String> keySet = data.keySet();
			
			System.out.println("Number of platforms:" + keySet.size());
			
			return keySet.size()+"";
			
			


	}
	
	@GET
	@Path("/getResvInfo/{trainNumber}/{journeyClass}/{date}/{station}")
	public String getReservationInfo(
			@PathParam("trainNumber") String trainNumber,
			@PathParam("journeyClass") String journeyClass,
			@PathParam("date") String date, @PathParam("station") String station) {

//		System.out.println("Inside rest webservice for getReservationInfo");
//
//		// String name, String age, String gender, String pnr,
//		// String toStation, String status, String coach, String berth,
//		// String journeyClass;
//
//		ArrayList<ReservationInfo> list = new ArrayList<>();
//		try (BufferedReader reader = new BufferedReader(new InputStreamReader(
//				new FileInputStream("c:\\tmp\\resv.txt")))) {
//
//			String line;
//
//			while ((line = reader.readLine()) != null) {
//				//System.out.println(line);
////				if (line.substring(42, 44).trim().equals(journeyClass)) {
////					list.add(new ReservationInfo(line.substring(0, 16), line
////							.substring(17, 19), line.substring(16, 17), line
////							.substring(19, 29), line.substring(29, 33), line
////							.substring(33, 37), line.substring(37, 39), line
////							.substring(39, 42), line.substring(42, 44)));
////				}				
//				
//				if (line.substring(49, 51).trim().equals(journeyClass)) {
//					list.add(new ReservationInfo(
//							line.substring(6, 21), 
//							line.substring(22, 24), //age
//							line.substring(21, 22), //gender
//							line.substring(24, 34), //pnr
//							line.substring(34, 38), //tostation
//							line.substring(38, 42), //status
//							line.substring(42, 46), //coach
//							line.substring(46, 49), //berth
//							line.substring(49, 51), //class
//							line.substring(2, 6), //wl number
//							line.substring(1, 2)  //booking status
//					));
//				}
//			}
//			
//			
//			
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//
//		//Collections.sort(list);
//		
//		String returnVal = new GsonBuilder().create().toJson(list);
		//System.out.println("rturn vale:" + returnVal);
		
		StringBuffer query = new StringBuffer();
		
		query.append(ReservationConstants.SOH);
		query.append("001");
		query.append(String.format("%2s","" + LocalTime.now().getHour()).replace(' ', '0'));
		query.append(String.format("%2s","" + LocalTime.now().getMinute()).replace(' ', '0'));
		query.append("Q024");
		query.append("0015");
		query.append(ReservationConstants.SOT);
		query.append(trainNumber);
		query.append(date.substring(0,2) + date.substring(3,5));
		query.append(ReservationConstants.STATION_CODE_PADDED);
		query.append(journeyClass);
		query.append("P");
		query.append(ReservationConstants.EOT);
		
		
		System.out.println("Calling serial port comms for Q024 with query :" + query.toString());
		ComPortSendReceive c = ComPortSendReceive.getInstance();
		ReaderWriter rw = new ReaderWriter(c, query.toString());
		rw.start();
		try {
		rw.join();
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		String queryResponse = c.getResponse().toString();
		System.out.println("Returning " + queryResponse);
		
		ArrayList<ReservationInfo> list = new ArrayList<> ();
		
		
		String noOfResponsePackets = queryResponse.substring(25,27);
		int noOfPackets = Integer.parseInt(noOfResponsePackets);
		
		int currentPointer = 0;
		for (int i=0; i< noOfPackets; i++) {
			String responseLength = queryResponse.substring(currentPointer + 29,currentPointer + 32);
			int numberOfRecords = Integer.parseInt(responseLength)/19;
			
			for (int k = 0; k < numberOfRecords; k ++) {
				String passengerRecord = queryResponse.substring(currentPointer + 34 + k*68,   currentPointer + 34 + k*68 + 68);
				
				list.add(new ReservationInfo(
						passengerRecord.substring(8, 23), //name
						passengerRecord.substring(24, 26), //age
						passengerRecord.substring(23, 24), //gender
						passengerRecord.substring(26, 36), //pnr
						passengerRecord.substring(36, 40), //tostation
						passengerRecord.substring(38, 42), //status
						passengerRecord.substring(40, 44), //coach
						passengerRecord.substring(44, 47), //berth
						passengerRecord.substring(47, 49), //class
						passengerRecord.substring(1, 5), //wl number
						passengerRecord.substring(0, 1) , //booking status
						passengerRecord.substring(49,68) // hindi name
				));
				
			}
			
			currentPointer = currentPointer + 35 + numberOfRecords*68;
			
		}
		
		
		String returnVal = new GsonBuilder().create().toJson(list);
		
		return returnVal;

	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/configurePlatform/{platform}/{screen}/{trainNumber}/{trainName}/{journeyClass}/{date}/{station}")
	public void postData(@PathParam("platform") String platform,
			@PathParam("screen") String screen,
			@PathParam("trainNumber") String trainNumber,
			@PathParam("trainName") String trainName,
			@PathParam("journeyClass") String journeyClass,
			@PathParam("date") String date, 
			@PathParam("station") String station) throws IOException {

		ConfigUtils configUtils = new ConfigUtils();
		ConfigData  configData = configUtils.getConfigData();
		HashMap<String, PlatformInfo> data = configData.trainInfoData;
		System.out.println("Configuring platform " + platform + " screen " + screen);
		if (data == null) {
			System.out.println("Data is null");
			data = new HashMap<String, PlatformInfo>();
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

		if (data.containsKey(platform)) {
			PlatformInfo platformInfo = data.get(platform);
			ScreenInfo screenInfo = platformInfo.getScreen(screen);
			if(screenInfo == null) {
				screenInfo = new ScreenInfo();
			}
			System.out.println("Data contains Key");
			System.out.println("size before modification " + platformInfo.getScreens().size());
			screenInfo.setDate(dateFormatted);
			screenInfo.setJourneyClass(journeyClass);
			screenInfo.setTrainNumber(trainNumber);
			screenInfo.setStationName(station);
			screenInfo.setTrainName(trainName);
			
			platformInfo.modifyScreenInfo(screen, screenInfo);
			System.out.println("size after modification " + platformInfo.getScreens().size());
			data.put(platform, platformInfo);
			configData.trainInfoData = data;
			configUtils.writeConfigData(configData);
			getScreenConfig(platform);
			
		} else {
			System.out.println("Data does not contain Key");
			PlatformInfo platformInfo = new PlatformInfo();

			platformInfo.setPlatform(platform);
			
			ScreenInfo si = new ScreenInfo(screen, trainNumber, trainName, journeyClass, dateFormatted, station);
			ArrayList<ScreenInfo> screens = new ArrayList<ScreenInfo>();
			screens.add(si);
			platformInfo.setScreens(screens);
			data.put(platform, platformInfo);
			configData.trainInfoData = data;
			configUtils.writeConfigData(configData);

		}

	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/removePlatformConf/{platform}/{screen}")
	public void removePlatformConfigurationData(@PathParam("platform") String platform,
			@PathParam("screen") String screen) throws IOException {
		ConfigUtils configUtils = new ConfigUtils();
		ConfigData configData = configUtils.getConfigData();
		
		HashMap<String, PlatformInfo> trainInfoData = configData.trainInfoData;
		
		if (trainInfoData != null && trainInfoData.containsKey(platform) ) {
			PlatformInfo platformInfo = trainInfoData.get(platform);
			
			List<ScreenInfo> screens = platformInfo.getScreens();
			
			Iterator<ScreenInfo> iter = screens.iterator();
			
			while(iter.hasNext()) {
				ScreenInfo si = iter.next();
				if(si.getScreen().equals(screen)) {
					si.setDate(null);
					si.setJourneyClass(null);
					si.setScreen(screen);
					si.setStationName(null);
					si.setTrainName(null);
					si.setTrainNumber("0");
					si.setUri(null);
					break;
				}
				
			}
			
			platformInfo.setScreens(screens);

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
	public void addScreens(@PathParam("platformNumber") String platform,
			@PathParam("screenNumber") String screen) throws IOException {



		ConfigUtils utils = new ConfigUtils();
		ConfigData configData = utils.getConfigData();
		

		ScreenDetails screenDetails = null;

		
		if (configData.screens == null) {
			System.out.println("platforms is null");
			configData.screens = new ArrayList<ScreenDetails>();
			screenDetails = new ScreenDetails(platform, screen);
			configData.screens.add(screenDetails);
		} else {
			// screens is not a null list
			Iterator<ScreenDetails> i = configData.screens.iterator();

			while (i.hasNext()) {
				ScreenDetails sd =  i.next();
				if (sd.getPlatformNumber().equals(platform) && sd.getScreenNumber().equals(screen)) {
					screenDetails = sd;
					break;
				}
			}
			
			if (screenDetails == null) {
				screenDetails = new  ScreenDetails(platform, screen);
				configData.screens.add(screenDetails);
			}
			
			
			
			
		}
		
		utils.writeConfigData(configData);
				
		postData(platform,screen,"0","","",null,"");
		

	}

	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/removeScreen/{platform}/{screen}")
	public void removeScreen(@PathParam("platform") String platform,
				@PathParam("screen") String screen) throws IOException {

		System.out.println("removing " + platform + "/" + screen );

		ConfigUtils utils = new ConfigUtils();
		ConfigData configData = utils.getConfigData();
		

		ScreenDetails screenDetails = null;

		
		if (configData.screens != null) {
			// screens is not a null list
			Iterator<ScreenDetails> i = configData.screens.iterator();

			while (i.hasNext()) {
				ScreenDetails sd =  i.next();
				if (sd.getPlatformNumber().equals(platform) && sd.getScreenNumber().equals(screen) ) {
					System.out.println("removing");
					i.remove();
					
					HashMap<String, PlatformInfo> trainInfoData = configData.trainInfoData;
					
					if (trainInfoData != null && trainInfoData.containsKey(platform)) {
						PlatformInfo platformInfo = trainInfoData.get(platform);
						platformInfo.removeScreen(screen);
						if(platformInfo.getScreens().size() == 0) {
							System.out.println("last screen removing the entry of platform from the table");
							trainInfoData.remove(platform);
						}
						else {
							trainInfoData.put(platform, platformInfo);
						}
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

