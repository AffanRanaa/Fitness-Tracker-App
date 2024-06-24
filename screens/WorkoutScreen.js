import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import useCompletedExercises from '../hooks/useCompletedExercises';
import CustomButton from '../components/CustomButton';
import styles from '../styles/WorkOutScreenStyles';

const WorkOutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, resetCompletedExercises } = useCompletedExercises();

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <Image
          style={styles.image}
          source={{ uri: route.params.image }}
        />

        <Ionicons
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
          name="arrow-back-outline"
          size={28}
          color="white"
        />

        {route.params.excersises.map((item, index) => (
          <Pressable
            style={styles.exerciseItem}
            key={index}
          >
            <Image
              style={styles.exerciseImage}
              source={{ uri: item.image }}
            />

            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseName}>
                {item.name}
              </Text>

              <Text style={styles.exerciseSets}>
                x{item.sets}
              </Text>
            </View>

            {completed.includes(item.name) && (
              <AntDesign
                style={styles.checkIcon}
                name="checkcircle"
                size={24}
                color="green"
              />
            )}
          </Pressable>
        ))}
      </ScrollView>

      <CustomButton
        onPress={() => {
          navigation.navigate('Fit', {
            excersises: route.params.excersises,
          });
          resetCompletedExercises();
        }}
        title="START"
      />
    </>
  );
};

export default WorkOutScreen;
