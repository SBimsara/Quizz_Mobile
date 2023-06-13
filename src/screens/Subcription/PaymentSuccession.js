import React from "react";
import { NativeBaseProvider, Button } from "native-base";
import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";

// import Success from "../../../assets/images/Success.png";

const PaymentSuccession = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.title, styles.moveUp]}>Payment Successfull!</Text>
        <Image
          style={styles.slashImg}
          source={require("../../../assets/images/Success.png")}
        />

        <Button style={[styles.slashBtn, styles.moveDown]}>
          <Text style={styles.btnTxt}>Proceed</Text>
        </Button>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6ffcc",
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
    fontSize: 23,
    fontWeight: "bold",
    color: "#008000",
  },
  moveUp: {
    transform: [{ translateY: -100 }],
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
    color: "#008000",
  },
  btnTxt: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default PaymentSuccession;
