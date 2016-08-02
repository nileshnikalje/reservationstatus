package com.balle.utils;

import com.balle.comms.ComPortSendReceive;
import com.balle.comms.ReaderWriter;

public class TestPort {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String query = "2A";
		System.out.println("Calling serial port comms for " + query);
		ComPortSendReceive c = ComPortSendReceive.getInstance();
		ReaderWriter rw = new ReaderWriter(c, query);
		rw.start();
		try {
		rw.join();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

}
