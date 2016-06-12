package com.balle.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Properties;

public class PropertiesUtils {

	static Properties prop;

	static {
		prop = new Properties();

		try {
			InputStream input = new FileInputStream("D:\\config.properties");
			prop.load(input);

		} catch (FileNotFoundException e) {
			e.printStackTrace();

		} catch (IOException e) {

			e.printStackTrace();
		}
	}

	public static void saveProperties(Properties prop) {
		OutputStream output = null;

		try {
			output = new FileOutputStream("D:\\config.properties");
			prop.store(output, null);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (output != null) {
				try {
					output.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

	
	public static void addProperty(String key, String value) {
		prop.setProperty(key, value);
		saveProperties(prop);
	}
	
	public static String getProperty(String key) {
		return (String) prop.get(key);
	}
	
}
