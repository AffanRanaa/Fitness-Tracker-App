import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  // Add the types for your navigation stack here if necessary
};

const RestScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  let timer: NodeJS.Timeout;
  const [timeLeft, setTimeLeft] = useState<number>(3);

  const startTime = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
  };

  useEffect(() => {
    startTime();
    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <SafeAreaView>
      <Image
        // resizeMode="contain"
        source={{
          uri: "https://media.sciencephoto.com/f0/20/57/87/f0205787-800px-wm.jpg",
        }}
        style={{ width: "100%", height: 420 }}
      />

      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        TAKE A BREAK!
      </Text>

      <Text
        style={{
          fontSize: 40,
          fontWeight: "800",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        {timeLeft}
      </Text>
    </SafeAreaView>
  );
};

export default RestScreen;

const styles = StyleSheet.create({});
