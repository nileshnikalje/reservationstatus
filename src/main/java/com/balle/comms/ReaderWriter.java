package com.balle.comms;


public class ReaderWriter extends Thread {
	private ComPortSendReceive comPortSendReceive;
	private String query;

	
	
	public ReaderWriter(ComPortSendReceive comPortSendReceive, String query) {
		super();
		this.comPortSendReceive = comPortSendReceive;
		this.query = query;
	}
	
	public void run() {
		comPortSendReceive.writeAndRead(query);
	}

}
