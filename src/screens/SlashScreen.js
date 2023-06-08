import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";
import OnlineTest from "../../assets/images/OnlineTest.png";

import { NativeBaseProvider, Button } from "native-base";

const SlashScreen = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Image
          style={[styles.slashImg, styles.moveUp]}
          source={require("../../assets/images/OnlineTest.png")}
        />
        <Text style={[styles.title, styles.moveUp]}>
          Get your knowledge tested
        </Text>
        <Button style={[styles.slashBtn, styles.moveDown]}>
          <Text style={styles.btnTxt}>Get Started</Text>
        </Button>
        <View style={[styles.signIn, styles.moveDown]}>
          <Text>Already have an accont?</Text>
          <Text style={styles.signInText}> Sign in</Text>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
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
    transform: [{ translateY: -120 }],
  },
  moveDown: {
    transform: [{ translateY: 100 }],
  },
  signIn: {
    flexDirection: "row",
    alignItems: "center",
  },
  signInText: {
    color: "#086788",
    fontWeight: "bold",
  },
  slashBtn: {
    width: 300,
    height: 45,
    marginBottom: 8,
  },
  btnTxt: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default SlashScreen;
