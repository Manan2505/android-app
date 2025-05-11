import { Text, View, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import Homepage from '../components/Homepage'
export default function Home() {
  return (
    <View style={styles.container}>
      <Homepage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // Ensure it's not black
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});
