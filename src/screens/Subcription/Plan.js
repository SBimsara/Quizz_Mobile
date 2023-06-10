import { Button, NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

const Plan = (props) => {
  const { data, title } = props;
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.title, styles.moveUp]}>Premium </Text>

        <Text style={[styles.description, styles.moveUp]}>
          Discover the ideal subscription plan tailored to your need, providing
          you with a seamless and enjoyable experience across all our services.
        </Text>

        <Button
          shadow={2}
          onPress={() => console.log("hello world")}
          style={[styles.btn, styles.moveDown]}
        >
          Pay Now
        </Button>
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
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 300,
    height: 45,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  helpingText: {
    textAlign: "center",
    marginTop: 15,
    marginRight: 35,
    marginLeft: 35,
  },
  moveUp: {
    transform: [{ translateY: -200 }],
  },
  moveDown: {
    transform: [{ translateY: 120 }],
  },
  description: {
    width: 300,
    fontSize: 15,
    textAlign: "center",
    marginTop: 40,
  },
});

export default Plan;
