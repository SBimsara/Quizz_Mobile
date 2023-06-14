import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SubjectScreen from "./src/screens/SubjectScreen";
import LeaderboardScreen from "./src/screens/LeaderboardScreen";
import AchievementsScreen from "./src/screens/AchievementsScreen";
import SummaryScreen from "./src/screens/SummaryScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import AboutScreen from "./src/screens/AboutScreen";
import PaymentSuccession from "./src/screens/Subcription/PaymentSuccession";
import PaymentRejection from "./src/screens/Subcription/PaymentRejection";
import SubcriptionPlans from "./src/screens/Subcription/SubcriptionPlans";
import Plan from "./src/screens/Subcription/Plan";
import Leader from "./src/screens/LeaderboardTest";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Leaderboard" component={Leader} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Subcription Plans" component={SubcriptionPlans} />
        <Stack.Screen name="Plan" component={Plan} />
        <Stack.Screen name="Payment Success" component={PaymentSuccession} />
        <Stack.Screen name="Payment Rejection" component={PaymentRejection} />

        <Stack.Screen name="Subject" component={SubjectScreen} />
        {/* <Stack.Screen name="Leaderboard" component={LeaderboardScreen} /> */}
        <Stack.Screen name="Achievements" component={AchievementsScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
