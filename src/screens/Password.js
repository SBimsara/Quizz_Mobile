import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { NativeBaseProvider, VStack, Input,Button } from "native-base";
import NextButton from "../components/NextButton";
import PreviousButton from "../components/PreviousButton";

const Password = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.moveUp}>Create a strong password</Text>
        <View style={styles.inputStack}>
          <VStack space={4} alignItems="center">
            <Input variant="outline" placeholder="Enter password*" />
            <Input variant="outline" placeholder="Confirm password*" />
          </VStack>
        </View>
        <View style={[styles.btnContainer, styles.moveDown]}>
          <PreviousButton />
          <NextButton />
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
  moveUp: {
    transform: [{ translateY: -130 }],
  },
  moveDown: {
    transform: [{ translateY: 130 }],
  },
  btnContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Password;
