// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const AchievementsScreen = () => {
//   return (
//     <View>
//       <Text>AchievementsScreen</Text>
//     </View>
//   );
// };

// export default AchievementsScreen;

// const styles = StyleSheet.create({});
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AchievementsScreen = () => {
 
  const achievements = [
    {
      title: 'Novice Quizzer',
      description: 'Complete 10 quizzes',
      image: require('./assets/images/novice.png'),
      boxColor: '#ff7f50', 
    },
    {
      title: 'Master Quizzer',
      description: 'Complete 50 quizzes',
      image: require('./assets/images/master.png'),
      boxColor: '#6495ed', 
    },
    {
      title: 'Trivia Guru',
      description: 'Get 100% accuracy in a quiz',
      image: require('./assets/images/guru.png'),
      boxColor: '#ff69b4', 
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Achievements</Text>
      {achievements.map((achievement, index) => (
        <View key={index} style={[styles.box, { backgroundColor: achievement.boxColor }]}>
          <Image source={achievement.image} style={styles.image} />
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
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  box: {
    // alignItems: 'center',
    // padding: 16,
    // marginVertical: 10,
    // borderRadius: 8,
    // width: '90%',


    alignItems: 'center',
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});

export default AchievementsScreen;

