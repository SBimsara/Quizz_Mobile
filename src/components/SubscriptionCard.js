import { NativeBaseProvider } from "native-base";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const SubscriptionCard = ({ title, price, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.mainContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.price}>Rs.{price}</Text>
      </View>

      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1085AE",
    // opacity: 0.5,
    borderRadius: 8,
    padding: 40,
    marginVertical: 8,
    elevation: 2,
    width: 300,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#D3D3D3",
  },
});

export default SubscriptionCard;
