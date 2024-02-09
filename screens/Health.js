import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#EEEDEB',
    border: '1px solid #bdbdbd',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
const HealthScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Health news</Text>
      </View>
    </View>
  );
};

export default HealthScreen;
