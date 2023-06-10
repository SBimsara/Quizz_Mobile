import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Copyright = () => {
  return (
    <View>
      <Text style={styles.container.text}>
        Copyright &copy; 1997 - 2023 hSenid Mobile Solutions. All Rights
        Reserved.
      </Text>
    </View>
  );
};

export default Copyright;

const styles = StyleSheet.create({
  container: {
    text: {
      fontSize: 12,
      color: "gray",
      width: "100%",
    },
  },
});
