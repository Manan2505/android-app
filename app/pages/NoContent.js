import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No content right now</Text>
    </View>
  );
};

export default NoContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // center vertically
    alignItems: 'center',     // center horizontally
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#555',
  },
});
