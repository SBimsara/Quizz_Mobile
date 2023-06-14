import React from "react";
import { SafeAreaView, Text, StyleSheet, View,KeyboardAvoidingView } from "react-native";
import { NativeBaseProvider, VStack, Input,Button } from "native-base";
import NextButton from "../components/NextButton";
import PreviousButton from "../components/PreviousButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const MobileNumber = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.keyboardAwareContainer}>
        <Text style={styles.moveUp}>Enter a mobile number</Text>
        <View style={styles.inputStack}>
          <VStack space={4} alignItems="center">
            <Input variant="outline" placeholder="Enter your mobile number* (username)" />
          </VStack>
        </View>
        <View style={[styles.btnContainer, styles.moveDown]}>
          <PreviousButton />
          <NextButton />
        </View>
        </KeyboardAwareScrollView>
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

  keyboardAwareContainer: {
    flexGrow: 1,
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

export default MobileNumber;
