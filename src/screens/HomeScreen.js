import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Center, StatusBar } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreenCards from "../components/HomeScreenCards";
import Copyright from "../components/Copyright";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dashboard}>
        <View style={styles.dashboardContent1}>
          <Image
            source={{
              uri: "https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg",
            }}
            style={styles.profileImg}
          />
          <Text style={styles.profileName}>Welcome Christine Eleanor</Text>
        </View>
        <View style={styles.dashboardContent2}>
          <View style={styles.rankpointsProperties}>
            <Text style={styles.rankpointsText}>Rank - </Text>
            <Text style={styles.rankpointsText}>12</Text>
          </View>
          <View style={styles.rankpointsProperties}>
            <Text style={styles.rankpointsText}>Points - </Text>
            <Text style={styles.rankpointsText}>225</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <HomeScreenCards />
        <View style={styles.copyright}>
          <Copyright />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    paddingTop: 15,
  },
  dashboard: {
    backgroundColor: "#012d4a",
    borderRadius: 30,
    width: "92.5%",
  },
  dashboardContent1: {
    height: 150,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  profileImg: {
    width: 110,
    height: 110,
    borderRadius: 100,
    marginTop: 20,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  dashboardContent2: {
    height: 45,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginTop: 50,
  },
  rankpointsProperties: {
    flexDirection: "row",
  },
  rankpointsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  scrollView: {
    flex: 1,
  },
  copyright: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
  },
});
