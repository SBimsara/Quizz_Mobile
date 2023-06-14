import React, { useState } from "react";

import { SafeAreaView, Text, StyleSheet,TouchableOpacity, Image, View } from "react-native";

import { NativeBaseProvider, Input, Button, VStack, } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


    const Login = () => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

        const handleLogin = () => {
            const loginData = {
              username: username,
              password: password,
            };
        
            fetch("http://localhost:8080/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(loginData),
            })
              .then((response) => response.text())
              .then((data) => {
                console.log(data); // handle the response data
              })
              .catch((error) => {
                console.error(error);
              });
          };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.keyboardAwareContainer}>
        <Text style={[styles.title, styles.moveUp]}>Welcome Back !</Text>
        <Image
          style={[styles.loginImg, styles.moveUp]}
          source={require("../../assets/images/login.png")}
        />
        <View style={[styles.inputStack,styles.moveDown]}>
          <VStack space={4} alignItems="center">
            <Input variant="outline" placeholder="Enter Username*" value={username}
  onChangeText={(text) => setUsername(text)}
/>
            <Input variant="outline" placeholder="Enter Password*"  value={password}
  onChangeText={(text) => setPassword(text)}/>
          </VStack>
           </View>
           <TouchableOpacity>
        <Text style={[styles.forgotPassword,styles.moveDown]}>Forgot password?</Text>
      </TouchableOpacity>
          <Button style={[styles.loginBtn, styles.moveDown]}onPress={handleLogin}>
          <Text style={styles.btnTxt}>Login</Text>
        </Button>
        <View style={[styles.signupContainer, styles.moveDown]}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
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
  keyboardAwareContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputStack: {
    width: 300,
    marginBottom: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 25,
  },
  moveUp: {
    transform: [{ translateY: -80 }],
  },
  moveDown: {
    transform: [{ translateY: 80 }],
  },

  btnContainer: {
    marginLeft: 200,
  },

  loginImg: {
    height: 300,
    width: 300,
    marginBottom:-120
  },

  signUpText: {
    color: "black",
    fontWeight: "bold",
  },
  loginBtn: {
    width: 300,
    height: 45,
    marginBottom: 8,
  },
  btnTxt: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },

  forgotPassword: {
    color: "#086788",
    marginBottom: 20,
    fontWeight: "bold",
    marginTop:30
  },

  signUpLink: {
    color: "#086788",
    fontWeight: "bold",
  },

  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default Login;
