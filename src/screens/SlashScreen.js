import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";
import OnlineTest from "../../assets/images/OnlineTest.png";

const SlashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={[styles.slashImg, styles.moveUp]}
        source={require("../../assets/images/OnlineTest.png")}
      />
      <Text style={[styles.title, styles.moveUp]}>
        Get your knowledge tested
      </Text>
      <View style={styles.signIn}>
        <Text>Already have an accont?</Text>
        <Text style={styles.signInText}> Sign in</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1FBFF",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
  },
  slashImg: {
    height: 250,
    width: 300,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  moveUp: {
    transform: [{ translateY: -150 }],
  },
  moveDown: {
    transform: [{ translateY: 150 }],
  },
  signIn: {
    flexDirection: "row",
    alignItems: "center",
  },
  signInText: {
    color: "#086788",
    fontWeight: "bold",
  },
});

export default SlashScreen;
