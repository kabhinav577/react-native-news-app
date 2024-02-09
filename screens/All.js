import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider, NativeBaseProvider } from 'native-base';

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
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
  description: {
    padding: 20,
  },
});

const All = () => {
  return (
    <NativeBaseProvider>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>All News</Text>
        </View>
        <View>
          <View style={styles.flex}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.date}>Date</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.title}>Description</Text>
          </View>
        </View>
        <Divider my={2} bg="purple.500" />
        <View>
          <View style={styles.flex}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.date}>Date</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.title}>Description</Text>
          </View>
        </View>
        <Divider my={2} bg="purple.500" />
        <View>
          <View style={styles.flex}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.date}>Date</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.title}>Description</Text>
          </View>
        </View>
        <Divider my={2} bg="purple.500" />
      </View>
    </NativeBaseProvider>
  );
};

export default All;
