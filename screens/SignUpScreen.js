import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { auth } from "../firebase";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleLogInPress() {
    navigation.navigate("Login");
  }

  const handleSignUp = async () => {
    if (email && password && firstName && lastName && phoneNumber) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
        Alert.alert(
          "Signup Successful",
          "You can now login with your new account."
        );
      } catch (err) {
        Alert.alert("Invalid Credentials", err.message);
      }
    } else {
      Alert.alert('Error', 'Please fill in all required fields.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/puu.jpeg')} // Replace with your background image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          autoCapitalize="none"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Middle Name (Optional)"
          value={middleName}
          onChangeText={setMiddleName}
          autoCapitalize="none"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          autoCapitalize="none"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
        />
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
        <Text style={styles.signupText}>
          Already have an account?{" "}
          <Text style={styles.signupLink} onPress={handleLogInPress}>
            Log In
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

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
  signupButton: {
    backgroundColor: "#3498db", // Change button color for better visibility
    paddingVertical: 12,
    width: "100%",
    borderRadius: 8,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default SignUpScreen;
