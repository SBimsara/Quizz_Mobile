// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { StyleSheet, View } from "react-native";

import { StripeProvider } from "@stripe/stripe-react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Test from "./src/screens/Subcription/Test";
import StackNavigator from "./StackNavigator";

const Stack = createNativeStackNavigator();
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
