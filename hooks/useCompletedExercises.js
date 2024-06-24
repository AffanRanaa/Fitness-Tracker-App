import { useContext } from 'react';
import { FitnessItems } from '../Context';

const useCompletedExercises = () => {
  const { completed, setCompleted } = useContext(FitnessItems);

  const markExerciseAsCompleted = (exerciseName) => {
    setCompleted((prev) => [...prev, exerciseName]);
  };

  const resetCompletedExercises = () => {
    setCompleted([]);
  };

  return { completed, markExerciseAsCompleted, resetCompletedExercises };
};

export default useCompletedExercises;
