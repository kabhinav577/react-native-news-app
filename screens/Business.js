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
const Business = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Business news</Text>
      </View>
    </View>
  );
};

export default Business;
