import React, { useContext } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>HOME WORKOUT</Text>

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

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
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
    marginTop: 40,
  },
  header: {
    backgroundColor: "#000",
    padding: 10,
    height: 200,
    width: "100%",
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
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
