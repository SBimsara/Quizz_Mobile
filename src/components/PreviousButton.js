import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { Button } from "native-base";

const PreviousButton = () => {
  return (
    <View style={styles.previousBtnContainer}>
      <Button style={styles.previousBtn}>
        <Text style={styles.previousBtnTxt}>Previous</Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  previousBtnTxt: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
  previousBtn: {
    width: 100,
  },
  previousBtnContainer: {
    marginRight: 0,
  },
});
export default PreviousButton;
