import { Button, NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";

import axios from "axios";

import { useStripe } from "@stripe/stripe-react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../BaseURL";
// // import api from "../../BaseURL";

// axios.defaults.baseURL = "http://192.168.1.101:8080/";

const Plan = ({ route }) => {
  const { planId } = route.params;

  const navigation = useNavigation();
  const stripe = useStripe();

  const [isLoading, setIsloading] = useState(true);
  const [planData, setPlanData] = useState([]);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    getPlanById(planId);
  }, []);

  const getPlanById = async () => {
    try {
      const response = await api.get(`plan/getPlanById/${planId}`);
      console.log(response.data.content);
      setIsloading(false);
      setPlanData(response.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const pay = async (amount) => {
    const data = {
      amount: amount,
    };
    try {
      const response = await api.post("payment/pay", data);
      if (response.data.clientSecret == null) {
        console.log(response.data.message);
        return;
      }
      const clientSecret = response.data.clientSecret;
      console.log(clientSecret);

      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: "Quizzer",
      });

      if (initSheet.error) {
        console.error(initSheet.error);
        console.log("InitSheet Error! ");
        navigation.navigate("Payment Rejection");
        return;
      }

      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) {
        console.error(presentSheet.error);
        console.log("PresentSheet Error! ");
        navigation.navigate("Payment Rejection");
        return;
      }

      console.log("Payment Successfull");
      navigation.navigate("Payment Success");
    } catch (error) {
      console.error(error);
      console.log(error);
      console.log("Payment failed!");
      navigation.navigate("Payment Rejection");
    }
  };

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
        <Text style={[styles.title, styles.moveUp]}>{planData.name}</Text>

        <Text style={[styles.description, styles.moveUp]}>
          Discover the ideal subscription plan tailored to your need, providing
          you with a seamless and enjoyable experience across all our services.
        </Text>
        <View styles={styles.priceBox}>
          <Text>Rs.{planData.price}</Text>
        </View>
        <Button
          shadow={2}
          onPress={() =>
            // navigation.navigate("Payment Screen", { planData: planData })
            pay(planData.price * (1 - planData.discount))
          }
          style={[styles.btn, styles.moveDown]}
        >
          Activate Now
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
    height: 50,
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
  priceBox: {
    width: 300,
    height: 150,
    borderRadius: 5,
    borderColor: "#1085AE",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Plan;
