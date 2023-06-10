import React from "react";

import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";

import { NativeBaseProvider, Input, Button, VStack, Select } from "native-base";
import SubscriptionCard from "../../components/SubscriptionCard";

const SubcriptionPlans = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.title, styles.moveUp]}>
          Now let's select a subscription plan
        </Text>
        <Text style={[styles.helpingText, styles.moveUp]}>
          If yoy want more time to decide select the free plan and change it
          later
        </Text>

        <SubscriptionCard
          title="Premium"
          price="2000"
          description="The best plan you can get"
        />
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
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  helpingText: {
    textAlign: "center",
    marginTop: 15,
    marginRight: 35,
    marginLeft: 35,
  },
  moveUp: {
    transform: [{ translateY: -120 }],
  },
});
export default SubcriptionPlans;
