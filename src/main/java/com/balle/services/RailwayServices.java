package com.balle.services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalTime;
import java.util.ArrayList;

import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import com.balle.comms.ComPortSendReceive;
import com.balle.comms.ReaderWriter;
import com.balle.dao.JourneyClass;
import com.balle.dao.Train;
import com.balle.dao.TrainInfoResponse;
import com.balle.utils.HMACGenerator;
import com.balle.utils.ReservationConstants;
import com.google.gson.Gson;

public class RailwayServices {
	
	

	public static String getTrainInfoByNumber(String trainNumber) {
//		CloseableHttpClient httpClient = HttpClients.createDefault();

		String trainInfoResponse = null;
		StringBuilder query = new StringBuilder();
		
		//query.append(ReservationConstants.SOH);
		query.append("\001");
		query.append("001");
		query.append(String.format("%2s","" + LocalTime.now().getHour()).replace(' ', '0'));
		query.append(String.format("%2s","" + LocalTime.now().getMinute()).replace(' ', '0'));
		query.append("Q019");
		query.append("0005");
		query.append(ReservationConstants.SOT);
		query.append(ReservationConstants.STATION_CODE_PADDED);
		query.append("4");
		query.append(ReservationConstants.EOT);

		
		System.out.println("Calling serial port comms for getting train info by number for " + trainNumber);
		System.out.println("Sending query:" + query.toString());
		ComPortSendReceive c = ComPortSendReceive.getInstance();
		ReaderWriter rw = new ReaderWriter(c, query.toString());
		rw.start();
		try {
		rw.join();
		} catch(Exception e) {
			e.printStackTrace();
		}

		System.out.println("Response for Q019 : " + c.getResponse().toString());
		
		StringBuffer response = c.getResponse();
//		StringBuffer response = new StringBuffer("A0001230S0190046B1299621091A2AFC3ACC    1200421091A2AFC3ACC    C");
		
		String noOfTrainsInResponse = response.substring(12,16);
		
		int noOfTrains = Integer.parseInt(noOfTrainsInResponse)/23;
		
		TrainInfoResponse tr = new TrainInfoResponse();
		
		if (noOfTrains > 0) {
			tr.responseCode = 200;
			
			for (int i = 0; i< noOfTrains; i++) {
				int startIndex = 17+(23*i);
				int endIndex = 17+(23*i)+23;
				String trainInfo = response.substring(startIndex, endIndex );
				String trainNumberInResponse = trainInfo.substring(0,5);
	
				
				if(trainNumberInResponse.equals(trainNumber)) {
					Train train = new Train();
					train.number = trainNumber;
					train.name = "";
					
					
					String classesString = trainInfo.substring(9);
					
					if(classesString.length() > 1) {
						
						for (int k = 0; k < classesString.length(); k=k+2) {
							String classCode = classesString.substring(k, k+2);
							if (classCode.trim().length() > 0) {
								JourneyClass jc = new JourneyClass();
								jc.classCode = classesString.substring(k, k+2);
								train.classes.add(jc);
							}
							
							
						}
					}
					
					tr.trains.add(train);
				}
				
			}
			
			if (tr.trains.size() < 1) {
				tr.responseCode = 0;
			}
		
		}
		else {
			tr.responseCode = 0;
		}
		
		
		//return (new Gson().toJson(tr));
		
		
//		
//		
//		URIBuilder builder = new URIBuilder();
//		builder.setScheme("http");
//		builder.setHost("www.railpnrapi.com");
//		builder.setPath("/test/trains");
//		builder.setParameter("name-number", trainNumber);
//		builder.setParameter("partial", "0");
//		builder.setParameter("format", "json");
//		builder.setParameter("pbapikey", ReservationConstants.PUBLIC_KEY);
//		builder.setParameter("pbapisign", HMACGenerator.getHMACString(
//				trainNumber + "json" + ReservationConstants.PUBLIC_KEY,
//				ReservationConstants.PRIVATE_KEY));
//
//		URI uri = null;
//		try {
//			uri = builder.build();
//		} catch (URISyntaxException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		HttpGet getRequest = new HttpGet(uri);
//
//		System.out.println("URL : " + getRequest.getURI());
//
//		CloseableHttpResponse serviceResponse = null;
//
//		try {
//			serviceResponse = httpClient.execute(getRequest);
//
//			HttpEntity entity = serviceResponse.getEntity();
//
//			
//
//			if (entity != null) {
//				trainInfoResponse = EntityUtils.toString(entity);
//			}
//
//		} catch (ClientProtocolException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} finally {
//			try {
//				serviceResponse.close();
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}
//
//		System.out.println(trainInfoResponse);
//		
		
		trainInfoResponse = new Gson().toJson(tr);
		System.out.println("New Response :" + trainInfoResponse);
		return trainInfoResponse;

	}

	public static void main(String args[]) throws IOException {
		RailwayServices.getTrainInfoByNumber("12004");
	}
}
