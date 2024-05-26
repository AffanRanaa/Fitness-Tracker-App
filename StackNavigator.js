import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FitScreen from './screens/FitScreen';
import HomeScreen from './screens/HomeScreen';
import RestScreen from './screens/RestScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import SignUpScreen from './screens/SignUpScreen'; 
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Fit" component={FitScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Rest" component={RestScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Workout" component={WorkoutScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} /> {/* Include SignUpScreen */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
