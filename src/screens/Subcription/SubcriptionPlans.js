import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { NativeBaseProvider, Input, Button, VStack, Select } from "native-base";
import axios from "axios";

import SubscriptionCard from "../../components/SubscriptionCard";

const SubcriptionPlans = ({ navigation }) => {
  const [isLoading, setIsloading] = useState(true);
  const [planData, setPlanData] = useState([]);

  const getPlanData = async () => {
    try {
      const response = await axios.get(
        "http:///192.168.1.101:8080/api/v1/plan/getAllPlans"
      );
      // const data = await response.json();
      setPlanData(response.data.content);
      setIsloading(false);
      console.log(response.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlanData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.title, styles.moveUp]}>
          Now let's select a subscription plan
        </Text>
        <Text style={[styles.helpingText, styles.moveUp]}>
          If you want more time to decide select the free plan and change it
          later
        </Text>

        {/* <SubscriptionCard
          title="Premium"
          price="2000"
          description="Unlock limitless possibilities!"
        /> */}
        <View style={styles.moveDown}>
          <ScrollView
            contentContainerStyle={styles.cardContainer}
            canCancelContentTouches={false}
          >
            {planData.map((plan) => (
              <SubscriptionCard
                key={plan.id} //plan object's unique ID
                title={plan.name}
                price={plan.price}
                description="Unlock limitless possibilities!"
                onPress={() => {
                  navigation.navigate("Plan", { planId: plan.id });
                }}
              />
            ))}
          </ScrollView>
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
  header: {},
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
    transform: [{ translateY: 100 }],
  },
  moveDown: {
    transform: [{ translateY: 120 }],
  },
  cardContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 170,
  },
});
export default SubcriptionPlans;
