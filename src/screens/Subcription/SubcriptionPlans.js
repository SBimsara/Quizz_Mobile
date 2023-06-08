import React from "react";

import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";

import { NativeBaseProvider, Input, Button, VStack, Select } from "native-base";

const SubcriptionPlans = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}></SafeAreaView>
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
});
export default SubcriptionPlans;
