/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.balle.comms;

import java.io.*; // IOException
import java.util.*; // Scanner

import com.balle.dao.ReservationInfo;
import com.google.gson.GsonBuilder;

import jssc.*;

/**
 *
 * @author Emiliarge
 */
public class ComPortSendReceive {

    private SerialPort serialPort;
    private static boolean    portBusy;
    private String response;
    private static ComPortSendReceive comPortSendReceive = null;
    
    public String getResponse() {
		return this.response;
	}

	public static ComPortSendReceive getInstance() {
    	if (comPortSendReceive == null) {
    		comPortSendReceive = new ComPortSendReceive();
    	}
		return comPortSendReceive;
    }
    
    /**
     * @param args the command line arguments
     */
    public synchronized void writeAndRead(String query) {
//        String[] portNames = SerialPortList.getPortNames();
//        
//        if (portNames.length == 0) {
//            System.out.println("There are no serial-ports :( You can use an emulator, such ad VSPE, to create a virtual serial port.");
//            System.out.println("Press Enter to exit...");
//            try {
//                System.in.read();
//            } catch (IOException e) {
//                // TODO Auto-generated catch block
//                e.printStackTrace();
//            }
//            return ;
//        }
//        
//        // port selection
//        System.out.println("Available com-ports:");
//        for (int i = 0; i < portNames.length; i++){
//            System.out.println(portNames[i]);
//        }
//        System.out.println("Type port name, which you want to use, and press Enter...");
//        Scanner in = new Scanner(System.in);
        String portName = "COM3";
        
        System.out.println("Waiting for busy port - " + query);
        
        while(portBusy) {
        	try {
				wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        }
        
        System.out.println("Port is free now- " + query);

        portBusy = true;
        System.out.println("Acquired port now- " + query);
        // writing to port
        serialPort = new SerialPort(portName);
        try {
            // opening port
            serialPort.openPort();
            
            serialPort.setParams(SerialPort.BAUDRATE_9600,
                                 SerialPort.DATABITS_8,
                                 SerialPort.STOPBITS_1,
                                 SerialPort.PARITY_NONE);
            
            serialPort.setFlowControlMode(SerialPort.FLOWCONTROL_RTSCTS_IN | 
                                          SerialPort.FLOWCONTROL_RTSCTS_OUT);
            
          //  serialPort.addEventListener(new PortReader(), SerialPort.MASK_RXCHAR);
            // writing string to port
            serialPort.writeString("Hurrah!!!");
            
            System.out.println("String wrote to port, waiting for response..");
            response = getData(query);
        }
        catch (SerialPortException ex) {
            System.out.println("Error in writing data to port: " + ex);
        }
    }
    
    public synchronized String getData(String query) {
    	System.out.println("Getting response ...");
    	ArrayList<ReservationInfo> list = new ArrayList<>();
    	try {
    		System.out.println("Sleeping for 15 seconds for " + query);
			Thread.sleep(15000);
			String journeyClass = query;
			
			try (BufferedReader reader = new BufferedReader(new InputStreamReader(
					new FileInputStream("c:\\tmp\\resv.txt")))) {

				String line;

				while ((line = reader.readLine()) != null) {
					//System.out.println(line);
//					if (line.substring(42, 44).trim().equals(journeyClass)) {
//						list.add(new ReservationInfo(line.substring(0, 16), line
//								.substring(17, 19), line.substring(16, 17), line
//								.substring(19, 29), line.substring(29, 33), line
//								.substring(33, 37), line.substring(37, 39), line
//								.substring(39, 42), line.substring(42, 44)));
//					}				
					
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

			
			
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	System.out.println("Retruning response");
    	
    	try {
			serialPort.closePort();
		} catch (SerialPortException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	portBusy = false;
    	System.out.println("freed port now - " + query);
    	return (new GsonBuilder().create().toJson(list));
    }
    
    
    
    // receiving response from port
    private  class PortReader implements SerialPortEventListener {

        @Override
        public synchronized void serialEvent(SerialPortEvent event) {
        	System.out.println("Inside event");
            if(event.isRXCHAR() && event.getEventValue() > 0) {
                try {
                    // receive a response from the port
                    String receivedData = serialPort.readString(event.getEventValue());
                    System.out.println("Received response from port: " + receivedData);
                }
                catch (SerialPortException ex) {
                    System.out.println("Error in receiving response from port: " + ex);
                }
            }
        }
    }
}
