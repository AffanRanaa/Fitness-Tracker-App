import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const HomeScreen = () => {
  const { minutes, calories, workout, setUser } = useContext(FitnessItems);

  const handleSignOut = async (setUser) => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Home Workout</Text>
          <Pressable onPress={() => handleSignOut(setUser)} style={styles.signOutButton}>
            <Text style={styles.headerText}>Sign Out</Text>
          </Pressable>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statText}>{workout}</Text>
            <Text style={styles.statLabel}>WORKOUTS</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statText}>{calories}</Text>
            <Text style={styles.statLabel}>KCAL</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statText}>{minutes}</Text>
            <Text style={styles.statLabel}>MINS</Text>
          </View>
        </View>
      </View>

      <FitnessCards />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: "#000",
    padding: 10,
    paddingBottom: 30,
    width: "100%",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  signOutButton: {
    padding: 10,
    marginTop: 10,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  stat: {
    alignItems: "center",
  },
  statText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
  },
  statLabel: {
    color: "#D0D0D0",
    fontSize: 17,
    marginTop: 6,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: "90%",
    height: 120,
    borderRadius: 7,
  },
}); 

export default HomeScreen;
