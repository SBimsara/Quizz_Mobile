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
import SlashScreen from "./src/screens/SlashScreen";
import NameRegistration from "./src/screens/Registration/NameRegistration";
import SubjectRegistration from "./src/screens/Registration/SubjectRegistration";
import SubcriptionPlans from "./src/screens/Subcription/SubcriptionPlans";
import Plan from "./src/screens/Subcription/Plan";

import { StripeProvider } from "@stripe/stripe-react-native";
import PaymentScreen from "./src/screens/Subcription/PaymentScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <View style={styles.container}>
    //   {/* <NameRegistration /> */}
    //   {/* <SlashScreen /> */}
    //   {/* <SubjectRegistration /> */}

    //   {/* <Plan /> */}
    //   {/* <StripeProvider >
    //     <PaymentScreen />
    //   </StripeProvider> */}
    //   <SubcriptionPlans />
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Subcription Plans"
          component={SubcriptionPlans}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Plan"
          component={Plan}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
