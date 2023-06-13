import React from "react";

import { Text, StyleSheet, View } from "react-native";

import { Button } from "native-base";

const NextButton = () => {
  return (
    <View style={styles.nextBtnContainer}>
      <Button style={styles.nextBtn}>
        <Text style={styles.nextBtnTxt}>Next</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  nextBtnTxt: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
  nextBtn: {
    width: 100,
  },
  nextBtnContainer: {
    marginLeft: 0,
  },
  //   moveDown: {
  //     transform: [{ translateY: 150 }],
  //   },
});

export default NextButton;
