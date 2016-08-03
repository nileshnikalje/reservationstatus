/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.balle.comms;

import java.io.*; // IOException
import java.util.*; // Scanner

import com.balle.dao.ReservationInfo;
import com.balle.utils.ReservationConstants;
import com.google.gson.GsonBuilder;

import jssc.*;

/**
 *
 * @author Emiliarge
 */
public class ComPortSendReceive {

    private SerialPort serialPort;
    private static boolean    portBusy;
    private StringBuffer response;
    private static ComPortSendReceive comPortSendReceive = null;
    private String query;
    
    public StringBuffer getResponse() {
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
        String[] portNames = SerialPortList.getPortNames();
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
        // port selection
        System.out.println("Available com-ports:");
        for (int i = 0; i < portNames.length; i++){
            System.out.println(portNames[i]);
        }
        
        response = new StringBuffer();
        
        if(portNames.length <= 0) {
        	return;
        }
        
        String portName = ReservationConstants.COMPORT;
        this.query = query;
        
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
//            
//            serialPort.setFlowControlMode(SerialPort.FLOWCONTROL_XONXOFF_IN | 
//                                          SerialPort.FLOWCONTROL_XONXOFF_OUT);
            
            serialPort.addEventListener(new PortReader(), SerialPort.MASK_RXCHAR);
            // writing string to port
            System.out.println("Writing data to port");
            

            
            System.out.println("Sending query on " + portName + ":" + query);
            serialPort.writeString(query);
            					
            					
            		
            
            System.out.println("String wrote to port, waiting for response..");

        }
        catch (SerialPortException ex) {
            System.out.println("Error in writing data to port: " + ex);
        }
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
                    response.append(receivedData);
                    System.out.print("Received response from port: " + receivedData);
                    if(receivedData.equals(Character.toString((char) (3)))) {
                    	System.out.println("Closing port now. Data returned:" + response.toString());

                    //	response = new StringBuffer(getData(query));
                    	serialPort.closePort();
                    	System.out.println("freed port now - " + query);
                    	portBusy = false;
//                    	serialPort.notify();
                    } 
                }
                catch (SerialPortException ex) {
                    System.out.println("Error in receiving response from port: " + ex);
                }
            }
        }
    }
}
