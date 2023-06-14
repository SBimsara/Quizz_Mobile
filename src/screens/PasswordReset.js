import React, { useState } from "react";

import { SafeAreaView, Text, StyleSheet, View } from "react-native";

import { NativeBaseProvider, Input, Button, VStack, Select } from "native-base";

const PasswordReset = () => {

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.title, styles.moveUp]}>Forgot Password?</Text>
        <View style={styles.inputStack}>
          <VStack space={4} alignItems="center">
            <Input variant="outline" placeholder="Enter Username*" />
            <Input variant="outline" placeholder="Enter new password*" />
            <Input variant="outline" placeholder="Confirm new password*" />
          </VStack>
          <Button style={[styles.ResetBtn, styles.moveDown]}>
          <Text style={styles.btnTxt}>Reset Password</Text>
        </Button>
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
  inputStack: {
    width: 300,
    marginBottom: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 8,
  },
  moveUp: {
    transform: [{ translateY: -130 }],
  },
  moveDown: {
    transform: [{ translateY: 130 }],
  },
  ResetBtn: {
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

export default PasswordReset;
