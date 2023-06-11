import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import HomeScreenData from "../data/HomeScreenData";
import { useNavigation } from "@react-navigation/native";

const HomeScreenCards = () => {
  const hsData = HomeScreenData;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {hsData.map((item, key) => (
        <Pressable
          key={key}
          onPress={() => {
            navigation.navigate({ name: item.navigate });
          }}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>{item.name}</Text>
            </View>
            <View style={styles.homescreencardImage}>
              <Text>{item.image}</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default HomeScreenCards;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  homescreencard: {
    backgroundColor: "#0a5073",
    width: "80%",
    height: 90,
    borderRadius: 20,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  homescreencardtextProperties: {
    flex: 1,
    marginLeft: 30,
  },
  homescreencardText: {
    fontSize: 26,
    color: "#ffffff",
    fontWeight: "500",
    letterSpacing: 1.5,
  },
  homescreencardImage: {
    marginRight: 30,
  },
});
