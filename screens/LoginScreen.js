import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password') {
      Alert.alert('Login Successful');
      navigation.replace('Home');
    } else {
      Alert.alert('Invalid email or password');
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Tracker Login</Text>
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Don't have an account? <Text style={styles.signupLink} onPress={handleSignUpPress}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#444',
    color: '#fff',
  },
  loginButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 16,
  },
  signupLink: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
