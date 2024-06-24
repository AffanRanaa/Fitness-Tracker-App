import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleLogin = async () => {
    const { email, password } = this.state;
    try {
      if (email && password) {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      Alert.alert("Invalid Credentials", err.message);
    }
  };

  handleSignUpPress = () => {
    this.props.navigation.navigate("SignUp");
  };

  handleForgotPassword = async () => {
    const { email } = this.state;
    if (!email) {
      Alert.alert("Enter your email", "Please enter your email to reset your password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Password Reset", "A password reset link has been sent to your email.");
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <ImageBackground
        source={require('../assets/puu.jpeg')} 
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Fitness Tracker Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => this.setState({ email: text })}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => this.setState({ password: text })}
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity style={styles.loginButton} onPress={this.handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPasswordButton} onPress={this.handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>
            Don't have an account?{" "}
            <Text style={styles.signupLink} onPress={this.handleSignUpPress}>
              Sign Up
            </Text>
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background for readability
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
    color: "#fff",
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "transparent", // Remove the border color
    borderWidth: 0,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Light background with transparency
    color: "#fff",
  },
  loginButton: {
    backgroundColor: "#3498db", // Change button color for better visibility
    paddingVertical: 12,
    width: "100%",
    borderRadius: 8,
    marginBottom: 16,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  forgotPasswordButton: {
    marginTop: 16,
  },
  forgotPasswordText: {
    color: "#3498db",
   // textDecorationLine: "underline",
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 16,
    textAlign: "center",
  },
  signupLink: {
    color: "#3498db",
   // textDecorationLine: "underline",
  },
});

export default LoginScreen;
