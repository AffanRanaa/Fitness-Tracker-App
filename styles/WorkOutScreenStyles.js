import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 170,
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  listContainer: {
    padding: 10,
  },
  exerciseItem: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  exerciseImage: {
    width: 90,
    height: 90,
  },
  exerciseInfo: {
    marginLeft: 10,
  },
  exerciseName: {
    fontSize: 17,
    fontWeight: 'bold',
    width: 170,
  },
  exerciseSets: {
    marginTop: 4,
    fontSize: 18,
    color: 'gray',
  },
  checkIcon: {
    marginLeft: 40,
  },
});

export default styles;
