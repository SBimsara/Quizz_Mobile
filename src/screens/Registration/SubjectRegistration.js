import React, { useState } from "react";

import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";

import { NativeBaseProvider, Input, Button, VStack, Select } from "native-base";

import { AntDesign } from "@expo/vector-icons";
import NextButton from "../../components/NextButton";
import PreviousButton from "../../components/PreviousButton";

const SubjectRegistration = () => {
  const [language, setLanguage] = useState("");
  const [religion, setReligion] = useState("");
  const [selective1, setSelective1] = useState("");
  const [selective2, setSelective2] = useState("");
  const [selective3, setSelective3] = useState("");
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.moveUp}>Now let's get your subjects selected</Text>
        <View style={styles.inputStack}>
          <VStack space={4} alignItems="center">
            <Select
              selectedValue={language}
              minWidth={300}
              accessibilityLabel="Select your Language*"
              placeholder="Select your Language*"
              //   _selectedItem={{
              //     endIcon: <AntDesign name="down" size={4} color="black" />,
              //   }}
              mt={1}
              //   onValueChange={(itemValue) => setLanguage(itemValue)}
            >
              {/* <Select.Item label="10" value="10" />
              <Select.Item label="11" value="11" />
              <Select.Item label="Special" value="" /> */}
            </Select>

            <Select
              selectedValue={religion}
              minWidth={300}
              accessibilityLabel="Select your Religion*"
              placeholder="Select your Religion*"
              //   _selectedItem={{
              //     endIcon: <AntDesign name="down" size={4} color="black" />,
              //   }}
              mt={1}
              //   onValueChange={(itemValue) => setReligion(itemValue)}
            >
              {/* <Select.Item label="10" value="10" />
              <Select.Item label="11" value="11" />
              <Select.Item label="Special" value="" /> */}
            </Select>

            <Select
              selectedValue={selective1}
              minWidth={300}
              accessibilityLabel="Select your selective Subject 1*"
              placeholder="Select your selective Subject 1*"
              //   _selectedItem={{
              //     endIcon: <AntDesign name="down" size={4} color="black" />,
              //   }}
              mt={1}
              //   onValueChange={(itemValue) => setSelective1(itemValue)}
            >
              {/* <Select.Item label="10" value="10" />
              <Select.Item label="11" value="11" />
              <Select.Item label="Special" value="" /> */}
            </Select>

            <Select
              selectedValue={selective2}
              minWidth={300}
              accessibilityLabel="Select your selective Subject 2*"
              placeholder="Select your selective Subject 2*"
              //   _selectedItem={{
              //     endIcon: <AntDesign name="down" size={4} color="black" />,
              //   }}
              mt={1}
              //   onValueChange={(itemValue) => setSelective2(itemValue)}
            >
              {/* <Select.Item label="10" value="10" />
              <Select.Item label="11" value="11" />
              <Select.Item label="Special" value="" /> */}
            </Select>

            <Select
              selectedValue={selective3}
              minWidth={300}
              accessibilityLabel="Select your selective Subject 3*"
              placeholder="Select your selective Subject 3*"
              //   _selectedItem={{
              //     endIcon: <AntDesign name="down" size={4} color="black" />,
              //   }}
              mt={1}
              //   onValueChange={(itemValue) => setSelective3(itemValue)}
            >
              {/* <Select.Item label="10" value="10" />
              <Select.Item label="11" value="11" />
              <Select.Item label="Special" value="" /> */}
            </Select>
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

  btnContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default SubjectRegistration;
