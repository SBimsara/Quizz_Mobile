import { StyleSheet, View } from "react-native";
import StackNavigator from "./StackNavigator";

import { StripeProvider } from "@stripe/stripe-react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Test from "./src/screens/Subcription/Test";

const App = () => {
  return (
    <StripeProvider publishableKey="pk_test_51NHa3qSHQTfZ29uMyhXey9EXgQuQAyxiXmdRxdpYfE0JMKVoJ8wnuufMpAq4owqYE9wG2V8g36Rr44vcJb9CaPNZ00GwfyfAX4">
      <StackNavigator />
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
