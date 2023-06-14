import React from "react";
import { Text, SafeAreaView, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";

const OTP = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.moveUp}>Confirm OTP</Text>
      <View style={[styles.otpContainer, styles.moveDown]}>
        <TouchableOpacity>
          <View style={styles.inputStack}>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.resendContainer, styles.moveDown]}>
        <Text style={styles.resendText}>Didn't receive an OTP?</Text>
        <TouchableOpacity>
          <Text style={styles.resendLink}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.submitBtn, styles.moveDown]}>
        <Text style={styles.btnTxt}>Submit</Text>
      </TouchableOpacity>
      <View style={[styles.reenterContainer, styles.moveDown]}>
        <Text style={styles.reenterText}>Wrong mobile number entered?</Text>
        <TouchableOpacity>
          <Text style={styles.resendLink}>Re enter</Text>
        </TouchableOpacity>
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
  moveUp: {
    transform: [{ translateY: -150 }],
  },
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputStack: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 40,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  moveDown: {
    marginBottom: 20,
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  resendText: {
    marginRight: 5,
  },
  resendLink: {
    color: "#086788",
    fontWeight: "bold",
  },
  submitBtn: {
    backgroundColor: "#086788",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop:100
  },
  btnTxt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  reenterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reenterText: {
    marginRight: 5,
  },
});

export default OTP;
