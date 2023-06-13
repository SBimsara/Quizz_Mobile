import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PaymentSuccession from "./src/screens/Subcription/PaymentSuccession";
import PaymentRejection from "./src/screens/Subcription/PaymentRejection";
import SubcriptionPlans from "./src/screens/Subcription/SubcriptionPlans";
import Plan from "./src/screens/Subcription/Plan";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Subcription Plans" component={SubcriptionPlans} />
        <Stack.Screen name="Plan" component={Plan} />
        <Stack.Screen name="Payment Success" component={PaymentSuccession} />
        <Stack.Screen name="Payment Rejection" component={PaymentRejection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
