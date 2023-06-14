import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SummaryScreen = () => {
  const sdata = [score=8, totalQuestions=10, numQuizzes = 3]
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/background.jpg')}
        style={styles.imageBackground}
      >
        <View style={styles.contentContainer}>
          <Image
            source={require('./images/summary-icon.png')}
            style={styles.icon}
          />
          <Text style={styles.header}>Quiz Summary</Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>{sdata.score}</Text>
            <Text style={styles.scoreText}>/{sdata.totalQuestions}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.details}>Total Questions: {sdata.totalQuestions}</Text>
            <Text style={styles.details}>Number of Quizzes Taken: {sdata.numQuizzes}</Text>
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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#fff',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  score: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#ff5722',
    marginRight: 8,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailsContainer: {
    marginBottom: 24,
  },
  details: {
    fontSize: 18,
    marginBottom: 8,
    color: '#fff',
  },
});
