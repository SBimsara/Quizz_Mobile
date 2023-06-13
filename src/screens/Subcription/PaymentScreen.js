import React, { useEffect, useState } from "react";

import { CardField } from "@stripe/stripe-react-native";
import { View } from "react-native";
import { Button, NativeBaseProvider } from "native-base";
import axios from "axios";

import { useStripe } from "@stripe/stripe-react-native";

// import API_URL from "../../Constants/API_URL";
API_URL = "http://192.168.1.101:8080/api/v1/";
publishableKey =
  "pk_test_51NHa3qSHQTfZ29uMyhXey9EXgQuQAyxiXmdRxdpYfE0JMKVoJ8wnuufMpAq4owqYE9wG2V8g36Rr44vcJb9CaPNZ00GwfyfAX4";

const PaymentScreen = ({ navigation, route }) => {
  const { planData } = route.params;

  const stripe = useStripe();
  //   const { confirmPayment } = useStripe();
  // const { confirmPayment, loading } = useConfirmPayment();

  // const [card, setCard] = useState(null);

  // const amount = planData.price * planData.discount;

  const pay = async (amount) => {
    // const response = await fetch(
    //   "http://192.168.1.101:8080/api/v1/payment/charge",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       description: planData.name,
    //       amount: amount,
    //       currency: "lkr",
    //     }),
    //   }
    // );
    // const { clientSecret } = await response.json();
    // console.log(clientSecret);
    // return clientSecret;

    const data = {
      amount: amount,
    };
    try {
      const response = await axios.post(
        "http://192.168.1.101:8080/api/v1/payment/pay",
        data
      );
      if (response.data.clientSecret == null) {
        console.log(response.data.message);
        return;
      }
      const clientSecret = response.data.clientSecret;
      console.log(clientSecret);

      const init = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
      });

      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
    } catch (error) {
      console.error(error);
    }
  };

  //   const handlePayPress = async () => {
  //     // if (!card) {
  //     //   return;
  //     // }

  //     // Gather the customer's billing information (for example, email)
  //     const billingDetails = {
  //       email: "jenny.rosen@example.com",
  //     };

  //     // Fetch the intent client secret from the backend
  //     const clientSecret = fetchPaymentIntentClientSecret();

  //     // Confirm the payment with the card details
  //     const { paymentIntent, error } = await confirmPayment(clientSecret, {
  //       paymentMethodType: card,
  //       paymentMethodData: {
  //         billingDetails,
  //       },
  //     });

  //     if (error) {
  //       console.log("Payment confirmation error", error);
  //     } else if (paymentIntent) {
  //       console.log("Success from promise", paymentIntent);
  //     }
  //   };

  return (
    <NativeBaseProvider>
      <View>
        <CardField
          postalCodeEnabled={false}
          placeholders={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={{
            backgroundColor: "#FFFFFF",
            textColor: "#000000",
          }}
          style={{
            width: "100%",
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            // setCard(cardDetails);
          }}
          onFocus={(focusedField) => {
            console.log("focusField", focusedField);
          }}
        />

        <Button onPress={pay}>Pay</Button>
      </View>
    </NativeBaseProvider>
  );
};

export default PaymentScreen;
