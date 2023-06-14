import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Lesson from "./Lesson";
import { useNavigation } from "@react-navigation/native";

const SubjectScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.screenContainer}>
      <Pressable
          onPress={() => {
            navigation.navigate({ name: 'Lesson' });
          }}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>Mathematics</Text>
            </View>
            <View style={styles.homescreencardImage}>
            <Feather name="book-open" size={42} color="white" />    
            </View>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate({ name: 'Lesson' });
          }}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>Biology</Text>
            </View>
            <View style={styles.homescreencardImage}>
            <Feather name="book-open" size={42} color="white" />    
            </View>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            // navigation.navigate({ name: item.navigate });
          }}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>Science</Text>
            </View>
            <View style={styles.homescreencardImage}>
            <Feather name="book-open" size={42} color="white" />    
            </View>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            // navigation.navigate({ name: item.navigate });
          }}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>English</Text>
            </View>
            <View style={styles.homescreencardImage}>
            <Feather name="book-open" size={42} color="white" />    
            </View>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            // navigation.navigate({ name: item.navigate });
          }}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>History</Text>
            </View>
            <View style={styles.homescreencardImage}>
            <Feather name="book-open" size={42} color="white" />    
            </View>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            // navigation.navigate({ name: item.navigate });
          }}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>Sinhala</Text>
            </View>
            <View style={styles.homescreencardImage}>
              <Feather name="book-open" size={42} color="white" />    
            </View>
          </View>
        </Pressable>
    </View>
    </View>
  );
};

export default SubjectScreen;


const styles = StyleSheet.create({
  container: {
    alignItems: "center"

  },
  homescreencard: {
    backgroundColor: "#0a5073",
    width: "80%",
    height: 90,
    borderRadius: 20,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  homescreencardtextProperties: {
    flex: 1,
    marginLeft: 30,
  },
  homescreencardText: {
    fontSize: 26,
    color: "#ffffff",
    fontWeight: "500",
    letterSpacing: 1.5,
  },
  homescreencardImage: {
    marginRight: 30,
  },
  screenContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    paddingTop: 15,
    justifyContent: 'center'
  },
  containerTwo: {
    flex: 1,
    justifyContent: 'center'
  }
});

