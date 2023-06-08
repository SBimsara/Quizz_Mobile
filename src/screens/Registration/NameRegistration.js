import React, { useState } from "react";

import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";

import { NativeBaseProvider, Input, Button, VStack, Select } from "native-base";

import { AntDesign } from "@expo/vector-icons";

const NameRegistration = () => {
  const [service, setService] = useState("");

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.title, styles.moveUp]}>Welcome Onboard!</Text>
        <Text style={styles.moveUp}>Let's get you started</Text>
        <View style={styles.inputStack}>
          <VStack space={4} alignItems="center">
            <Input variant="outline" placeholder="First Name*" />
            <Input variant="outline" placeholder="Last Name*" />

            <Select
              selectedValue={service}
              minWidth="300"
              accessibilityLabel="Select a Grade*"
              placeholder="Select a Grade*"
              _selectedItem={{
                endIcon: <AntDesign name="down" size={4} color="black" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="10" value="10" />
              <Select.Item label="11" value="11" />
              <Select.Item label="Special" value="" />
            </Select>
          </VStack>
        </View>

        <Text>Name Registration</Text>
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
});

export default NameRegistration;
