package com.balle.utils;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class HMACGenerator {

	/**
	 * @param args
	 */
	public static String getHMACString (String inputString, String privateKey) {
		StringBuilder sb = new StringBuilder();
		try {
			Mac mac = Mac.getInstance("HmacSHA1");
			SecretKeySpec secret = new SecretKeySpec(privateKey.getBytes(),
					"HmacSHA1");
			mac.init(secret);
			byte[] digest = mac.doFinal(inputString.getBytes());
			for (byte b : digest) {
				System.out.format("%02x", b);
				
			}
			System.out.println();
			
			
			for (byte b : digest) {
				sb.append(String.format("%02x", b));
				
			}
			System.out.println(sb.toString());
			
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		return sb.toString();
		
	}
}
