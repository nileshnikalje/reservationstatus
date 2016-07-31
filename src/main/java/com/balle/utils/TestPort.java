package com.balle.utils;

import com.balle.comms.ComPortSendReceive;
import com.balle.comms.ReaderWriter;

public class TestPort {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String journeyClass = "2A";
		System.out.println("Calling serial port comms for " + journeyClass);
		ComPortSendReceive c = ComPortSendReceive.getInstance();
		ReaderWriter rw = new ReaderWriter(c, journeyClass);
		rw.start();
		try {
		rw.join();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

}
