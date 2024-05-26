import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import { FitnessContext } from './Context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <FitnessContext>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Workout" component={WorkoutScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Fit" component={FitScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Rest" component={RestScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FitnessContext>
  );
};

export default App;
