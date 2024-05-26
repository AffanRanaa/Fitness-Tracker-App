import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (email && password) {
      Alert.alert('Signup Successful', 'You can now login with your new account.');
      navigation.goBack(); // Navigate back to the login screen
    } else {
      Alert.alert('Error', 'Please fill in both email and password fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#333', // Black background
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
    color: '#fff', // White text color
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#555', // Gray border color
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#444', // Dark gray input background
    color: '#fff', // White text color
  },
  signupButton: {
    backgroundColor: '#000', // Black button background
    paddingVertical: 12,
    width: '100%',
    borderRadius: 8,
  },
  signupButtonText: {
    color: '#fff', // White text color
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SignUpScreen;
