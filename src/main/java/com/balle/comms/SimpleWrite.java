package com.balle.comms;

import gnu.io.CommPortIdentifier;
import gnu.io.PortInUseException;
import gnu.io.SerialPort;
import gnu.io.UnsupportedCommOperationException;

import java.io.*;
import java.util.*;



public class SimpleWrite {
    static Enumeration portList;
    static CommPortIdentifier portId;
    static String messageString = "33 character query string\n";
    static SerialPort serialPort;
    static OutputStream outputStream;

    
    static {
    	
    }
    public static void main(String[] args) {
        portList = CommPortIdentifier.getPortIdentifiers();
        
        SerialPortQuery.write("COM1", "33 character query string\n");

//        while (portList.hasMoreElements()) {
//            portId = (CommPortIdentifier) portList.nextElement();
//            if (portId.getPortType() == CommPortIdentifier.PORT_SERIAL) {
//                 if (portId.getName().equals("COM1")) {
//                //if (portId.getName().equals("/dev/term/a")) {
//                    try {
//                        serialPort = (SerialPort)
//                            portId.open("SimpleWriteApp", 2000);
//                    } catch (PortInUseException e) {}
//                    try {
//                        outputStream = serialPort.getOutputStream();
//                    } catch (IOException e) {}
//                    try {
//                        serialPort.setSerialPortParams(9600,
//                            SerialPort.DATABITS_8,
//                            SerialPort.STOPBITS_1,
//                            SerialPort.PARITY_NONE);
//                    } catch (UnsupportedCommOperationException e) {}
//                    try {
//                    	System.out.println("Writing Data");
//                        outputStream.write(messageString.getBytes());
//                        
//                    } catch (IOException e) {}
//                }
//            }
//        }
    }
}
