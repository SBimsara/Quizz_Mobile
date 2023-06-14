import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useEffect } from "react";
import axios from "axios";

const SummaryScreen = () => {
  const sdata = { score: 8, totalQuestions: 10, numQuizzes: 3 };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://img.freepik.com/premium-vector/business-people-characters-team-success-achievement-with-golden-cup-concept-vector-flat-cartoon-graphic-illustration_133260-2382.jpg",
        }}
        style={styles.imageBackground}
      >
        <View style={styles.contentContainer}>
          <Image
            source={{uri: "https://previews.123rf.com/images/microbagrandioza/microbagrandioza1908/microbagrandioza190800022/128482292-business-targeting-achievement-concept-vector-flat-cartoon-graphic-design-illustration.jpg"}}
            style={styles.icon}
          />
          <Text style={styles.header}>Quiz Summary</Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>{sdata.score}</Text>
            <Text style={styles.scoreText}>/{sdata.totalQuestions}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.details}>
              Total Questions: {sdata.totalQuestions}
            </Text>
            <Text style={styles.details}>
              Number of Quizzes Taken: {sdata.numQuizzes}
            </Text>
          </View>
          {/* <Button title="Restart Quiz" onPress={onRestartQuiz} color="#ff5722" /> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 24,
    borderRadius: 10,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#fff",
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  score: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#ff5722",
    marginRight: 8,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  detailsContainer: {
    marginBottom: 24,
  },
  details: {
    fontSize: 18,
    marginBottom: 8,
    color: "#fff",
  },
});
