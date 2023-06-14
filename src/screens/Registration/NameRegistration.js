import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { NativeBaseProvider, Input, VStack, Select } from "native-base";
import NextButton from "../../components/NextButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const NameRegistration = () => {
  const [grade, setGrade] = useState("");

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.keyboardAwareContainer}>
        <Text style={[styles.title, styles.moveUp]}>Welcome Onboard!</Text>
        <Text style={styles.moveUp}>Let's get you started</Text>
        <View style={styles.inputStack}>
          <VStack space={4} alignItems="center">
            <Input variant="outline" placeholder="Enter your first name" />
            <Input variant="outline" placeholder="Enter your last name" />

            <Select
              selectedValue={grade}
              minWidth={300}
              placeholder="Select a Grade*"
              onValueChange={(itemValue) => setGrade(itemValue)}
            >
              <Select.Item label="10" value="10" />
              <Select.Item label="11" value="11" />
              <Select.Item label="Other" value="Other" />
            </Select>
          </VStack>
        </View>
<View style={[styles.btnContainer, styles.moveDown]}>
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
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 8,
  },
  moveUp: {
    transform: [{ translateY: -100 }],
  },
  moveDown: {
    transform: [{ translateY: 130 }],
  },
  btnContainer: {
    marginLeft: 200,
  },
});

export default NameRegistration;
