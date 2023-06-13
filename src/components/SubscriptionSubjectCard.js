import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SubscriptionSubjectCard = ({ subject, grade }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.subject}>{subject}</Text>
      <Text style={styles.grade}>{grade}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  subject: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  grade: {
    fontSize: 16,
    color: "#666",
  },
});
export default SubscriptionSubjectCard;
