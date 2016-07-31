package com.balle.comms;

import gnu.io.CommPort;
import gnu.io.CommPortIdentifier;
import gnu.io.SerialPort;

import java.io.FileDescriptor;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.time.Duration;
import java.time.LocalTime;

public class TwoWaySerialComm {
	public TwoWaySerialComm() {
		super();
	}

	void write(String portName, String query) throws Exception {
		CommPortIdentifier portIdentifier = CommPortIdentifier
				.getPortIdentifier(portName);
		
		if (portIdentifier.isCurrentlyOwned()) {
			System.out.println("Error: Port is currently in use");
		} else {
			CommPort commPort = portIdentifier.open(this.getClass().getName(),
					2000);

			if (commPort instanceof SerialPort) {
				SerialPort serialPort = (SerialPort) commPort;
				serialPort.setSerialPortParams(57600, SerialPort.DATABITS_8,
						SerialPort.STOPBITS_1, SerialPort.PARITY_NONE);

				// InputStream in = serialPort.getInputStream();
				OutputStream out = serialPort.getOutputStream();

				// (new Thread(new SerialReader(in))).start();
				SerialWriter writer = new SerialWriter(out);
				System.out.println("calling writer.write");
				writer.write(query);
				//(new Thread(new SerialWriter(out))).start();

			} else {
				System.out
						.println("Error: Only serial ports are handled by this example.");
			}
		}
	}

	void read(String portName) throws Exception {
		CommPortIdentifier portIdentifier = CommPortIdentifier
				.getPortIdentifier(portName);
		if (portIdentifier.isCurrentlyOwned()) {
			System.out.println("Error: Port is currently in use");
		} else {
			CommPort commPort = portIdentifier.open(this.getClass().getName(),
					2000);

			if (commPort instanceof SerialPort) {
				SerialPort serialPort = (SerialPort) commPort;
				serialPort.setSerialPortParams(57600, SerialPort.DATABITS_8,
						SerialPort.STOPBITS_1, SerialPort.PARITY_NONE);

				InputStream in = serialPort.getInputStream();
				// OutputStream out = serialPort.getOutputStream();

				SerialReader reader = new SerialReader(in);
				System.out.println("Calling reader");
				reader.read();
			//	(new Thread(reader)).start();

				// (new Thread(new SerialWriter(out))).start();

			} else {
				System.out
						.println("Error: Only serial ports are handled by this example.");
			}
		}
	}

//	void connect(String portName) throws Exception {
//		CommPortIdentifier portIdentifier = CommPortIdentifier
//				.getPortIdentifier(portName);
//		if (portIdentifier.isCurrentlyOwned()) {
//			System.out.println("Error: Port is currently in use");
//		} else {
//			CommPort commPort = portIdentifier.open(this.getClass().getName(),
//					2000);
//
//			if (commPort instanceof SerialPort) {
//				SerialPort serialPort = (SerialPort) commPort;
//				serialPort.setSerialPortParams(57600, SerialPort.DATABITS_8,
//						SerialPort.STOPBITS_1, SerialPort.PARITY_NONE);
//
//				InputStream in = serialPort.getInputStream();
//				OutputStream out = serialPort.getOutputStream();
//
////				(new Thread(new SerialReader(in))).start();
////				(new Thread(new SerialWriter(out))).start();
//
//			} else {
//				System.out
//						.println("Error: Only serial ports are handled by this example.");
//			}
//		}
//	}

	/** */
	public static class SerialReader  {
		InputStream in;
		StringBuffer response = new StringBuffer();

		public SerialReader(InputStream in) {
			this.in = in;
		}

		public void read() {
			// TODO Auto-generated method stub
			byte[] buffer = new byte[1024];
			int len = -1;
			System.out.println("Inside reader");
			try {
				System.out.println("trying to read :" + this.in.read(buffer));
				while ((len = this.in.read(buffer)) > 0) {
					System.out.print("r:"+new String(buffer, 0, len));
				}
				System.out.println("Data Read");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

//		public void run() {
//			byte[] buffer = new byte[1024];
//			int len = -1;
//			System.out.println("trying to read");
//			try {
//				LocalTime lt = LocalTime.now();
//				while ((len = this.in.read(buffer)) > 0 ) {
//					response.append(new String(buffer, 0, len));
//					System.out.print(new String(buffer, 0, len));
//					
//				}
//				
//				System.out.println("Data Read");
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		}
	}

	/** */
	public static class SerialWriter  {
		OutputStream out;

		public SerialWriter(OutputStream out) {
			this.out = out;
		}

		public void write(String query) {
			System.out.println("Inside write : "+ query);
			// TODO Auto-generated method stub
			char[] strArray = query.toCharArray();
			for (int i = 0; i < strArray.length; i++) {
				try {
					this.out.write((int) strArray[i]);
					System.out.print(strArray[i]);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
			System.out.println("Data Written: " + query);

		}

//		public void run() {
//			try {
//				int c = 0;
//				System.out.println("Write Something waiting");
//				while ((c = System.in.read()) != 10) {
//					this.out.write(c);
//					System.out.println(c);
//				}
//				System.out.println("Data written");
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		}
	}

	public static void main(String[] args) {
		try {
			(new TwoWaySerialComm()).write("COM2","33 char query");
	//		(new TwoWaySerialComm()).read("COM2");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
