import React from "react";

import { NativeBaseProvider, Button } from "native-base";
import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";
const PaymentRejection = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={[styles.title, styles.moveUp]}>Payment Denied !</Text>
          <View style={styles.intro}>
            <Text style={styles.moveUp}>
              Oh no! your payment got denied. But we got you covered. We've
              activated free plan for you now and comeback and change your plan
              at some other time.
            </Text>
          </View>
        </View>

        <Image
          style={styles.slashImg}
          source={require("../../../assets/images/Denied.png")}
        />

        <Button style={[styles.slashBtn, styles.moveDown]}>
          <Text style={styles.btnTxt}>Proceed</Text>
        </Button>
        {/* <View style={[styles.signIn, styles.moveDown]}>
          <Text>Already have an accont?</Text>
          <Text style={styles.signInText}> Sign in</Text>
        </View> */}
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default PaymentRejection;

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
  top: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  intro: {
    width: 300,
    marginTop: 30,
  },
  slashImg: {
    height: 250,
    width: 300,
  },
  title: {
    fontSize: 22,
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
    marginTop: 10,
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
