import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import api from "../BaseURL";

const SettingsScreen = () => {
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    try {
      const response = await api.get("points/getPoints");
      console.log(response.result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
