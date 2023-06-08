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

const App = () => {
  return (
    <View style={styles.container}>
      {/* <NameRegistration /> */}
      {/* <SlashScreen /> */}
      {/* <SubjectRegistration /> */}
      <SubcriptionPlans />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
