package com.balle.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.HashMap;

import com.balle.dao.ScreenDetails;
import com.balle.dao.TrainInfo;
import com.balle.dao.UserDetails;


public class ConfigUtils {

	public void writeConfigData(ConfigData data) {

		try (ObjectOutputStream oos = new ObjectOutputStream(
				new FileOutputStream(ReservationConstants.CONFIG_FILE_PATH_NAME))) {

			oos.writeObject(data);

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	};

	public ConfigData getConfigData() throws IOException {
		ConfigData data = null;

		File file = new File(ReservationConstants.CONFIG_FILE_PATH_NAME);

		if (!file.exists()) {
			System.out.println("File not exists. Writing default Data");
			file.createNewFile();

				data = new ConfigData();
				data = writeConfigDefaultData(data);

			return data;			
		}

		try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(
				ReservationConstants.CONFIG_FILE_PATH_NAME))) {
			data = (ConfigData) ois.readObject();

			if (data == null) {
				data = new ConfigData();
				data = writeConfigDefaultData(data);
			}

			return data;
		} catch (IOException | ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return data;
	}

	public static void main(String args[]) {

		ConfigUtils c = new ConfigUtils();
		ConfigData cd = new ConfigData();
		UserDetails ud = new UserDetails("admin", "password");
		ArrayList<UserDetails> users = new ArrayList<>();

		users.add(ud);
		cd.users = users;

		c.writeConfigData(cd);

	}

	public ConfigData writeConfigDefaultData(ConfigData data) {
		// TODO Auto-generated method stub
		ArrayList<UserDetails> users = new ArrayList<>();
		users.add(new UserDetails("admin", "password"));
		data.users = users;
		data.screens = new ArrayList<ScreenDetails>();
		data.trainInfoData = new HashMap<String,TrainInfo>();
		writeConfigData(data);
		return data;
	}

}
