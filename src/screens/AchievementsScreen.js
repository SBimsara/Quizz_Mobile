import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AchievementsScreen = () => {
  const achievements = [
    {
      title: "Novice Quizzer",
      description: "Complete 10 quizzes",
      //image: require("../../assets/images/novice.png"),
      url: "https://img.freepik.com/premium-vector/cartoon-man-with-award-concept-achieving-goal-pride-achievement_617090-43.jpg?w=2000",
      boxColor: "#ff7f50",
    },
    {
      title: "Master Quizzer",
      description: "Complete 50 quizzes",
      //image: require("../../assets/images/master.png"),
      url: "https://img.freepik.com/premium-vector/cartoon-man-with-award-concept-achieving-goal-pride-achievement_617090-45.jpg?w=2000",
      boxColor: "#6495ed",
    },
    {
      title: "Trivia Guru",
      description: "Get 100% accuracy in a quiz",
      //image: require("../../assets/images/guru.png"),
      url: "https://img.freepik.com/premium-vector/cartoon-man-with-award-concept-achieving-goal-pride-achievement_617090-47.jpg",
      boxColor: "#ff69b4",
    },
  ];
  const myImage = require("../../assets/adaptive-icon.png");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Achievements</Text>
      {achievements.map((achievement, index) => (
        <View
          key={index}
          style={[styles.box, { backgroundColor: achievement.boxColor }]}
        >
          <Image
            source={{
              uri: achievement.url,
            }}
            style={styles.image}
          />
          <Text style={styles.title}>{achievement.title}</Text>
          <Text style={styles.description}>{achievement.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "lightgrey",
    marginTop: 30,
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  box: {
    alignItems: "center",
    padding: 16,
    marginVertical: 10,
    borderRadius: 50,
    width: "90%",
    alignSelf: "center",
    marginTop: 40,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
});

export default AchievementsScreen;
