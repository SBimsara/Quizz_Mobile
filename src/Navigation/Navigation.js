import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import questions from '../screens/questions'
import Quiz from '../screens/Quiz';
import Results from '../screens/Results';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
      <Stack.Screen name="Questions" component={questions} options={{ headerShown: false }} />
      <Stack.Screen name="Results" component={Results} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default MyStack;