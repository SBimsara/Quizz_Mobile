import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Feather } from "@expo/vector-icons";
import React from 'react'
import { useNavigation } from "@react-navigation/native";


const Lesson = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.screenContainer}>
      <Pressable
        onPress={() => {
            // navigation.navigate({ name: 'Question' });
        }}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>Trigonomatry</Text>
            </View>
            <View style={styles.homescreencardImage}>
            <Feather name="book-open" size={42} color="white" />    
            </View>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>Statistics</Text>
            </View>
            <View style={styles.homescreencardImage}>
            <Feather name="book-open" size={42} color="white" />    
            </View>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>Probability</Text>
            </View>
            <View style={styles.homescreencardImage}>
            <Feather name="book-open" size={42} color="white" />    
            </View>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>Equations</Text>
            </View>
            <View style={styles.homescreencardImage}>
            <Feather name="book-open" size={42} color="white" />    
            </View>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>Graphing</Text>
            </View>
            <View style={styles.homescreencardImage}>
            <Feather name="book-open" size={42} color="white" />    
            </View>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <View style={styles.homescreencard}>
            <View style={styles.homescreencardtextProperties}>
              <Text style={styles.homescreencardText}>Decimals</Text>
            </View>
            <View style={styles.homescreencardImage}>
            <Feather name="book-open" size={42} color="white" />    
            </View>
          </View>
        </Pressable>
    </View>
    </View>
  )
}

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
  
  

export default Lesson