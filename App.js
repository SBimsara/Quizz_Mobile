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
import Login from "./src/screens/Login";
import OTP from "./src/screens/OTP";
import PasswordReset from "./src/screens/PasswordReset";
import MobileNumber from "./src/screens/MobileNumber";
import Password from "./src/screens/Password";

const App = () => {
  return (
    <View style={styles.container}>
      {/*<NameRegistration />*/ }
      {/* <SlashScreen /> */}
      {/*<SubjectRegistration />*/}
      {<Login/>}
      {/*<OTP/>*/}
      {/*<PasswordReset/>*/}
      {/*<MobileNumber/>*/}
      {/*<Password/>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
