package com.balle.comms;

import gnu.io.CommPortIdentifier;
import gnu.io.NoSuchPortException;
import gnu.io.PortInUseException;
import gnu.io.SerialPort;
import gnu.io.UnsupportedCommOperationException;

import java.io.IOException;
import java.io.OutputStream;

public class SerialPortQuery {

    
    static CommPortIdentifier portId = null;
    static SerialPort serialPort;
    static OutputStream outputStream;
    
   
    public static void write(String portName, String query) {
    	if (portId == null) {
    		try {
				portId = CommPortIdentifier.getPortIdentifier(portName);
			} catch (NoSuchPortException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			try {
				serialPort = (SerialPort) portId.open("SimpleWriteApp", 2000);
			} catch (PortInUseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}	
			try {
				outputStream = serialPort.getOutputStream();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
            try {
				serialPort.setSerialPortParams(9600,
				        SerialPort.DATABITS_8,
				        SerialPort.STOPBITS_1,
				        SerialPort.PARITY_NONE);
			} catch (UnsupportedCommOperationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}    		
    	}
    	try {
			outputStream.write(query.getBytes());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
    	
    }
	
}
