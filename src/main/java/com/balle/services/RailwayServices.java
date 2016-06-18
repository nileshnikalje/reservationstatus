package com.balle.services;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import com.balle.utils.HMACGenerator;
import com.balle.utils.ReservationConstants;

public class RailwayServices {
	
	

	public static String getTrainInfoByNumber(String trainNumber) {
		CloseableHttpClient httpClient = HttpClients.createDefault();

		String trainInfoResponse = null;

		URIBuilder builder = new URIBuilder();
		builder.setScheme("http");
		builder.setHost("www.railpnrapi.com");
		builder.setPath("/test/trains");
		builder.setParameter("name-number", trainNumber);
		builder.setParameter("partial", "0");
		builder.setParameter("format", "json");
		builder.setParameter("pbapikey", ReservationConstants.PUBLIC_KEY);
		builder.setParameter("pbapisign", HMACGenerator.getHMACString(
				trainNumber + "json" + ReservationConstants.PUBLIC_KEY,
				ReservationConstants.PRIVATE_KEY));

		URI uri = null;
		try {
			uri = builder.build();
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		HttpGet getRequest = new HttpGet(uri);

		System.out.println("URL : " + getRequest.getURI());

		CloseableHttpResponse response = null;

		try {
			response = httpClient.execute(getRequest);

			HttpEntity entity = response.getEntity();

			

			if (entity != null) {
				trainInfoResponse = EntityUtils.toString(entity);
			}

		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				response.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		System.out.println(trainInfoResponse);
		return trainInfoResponse;

	}

	public static void main(String args[]) {
		RailwayServices.getTrainInfoByNumber("12004");
	}
}
