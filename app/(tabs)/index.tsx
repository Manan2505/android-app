import { Text, View, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import Homepage from '../components/Homepage'
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigations from '../navigations/HomeNavigations'
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Home() {
  return (
    <View style={styles.container}>
      <HomeNavigations />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff', // Ensure it's not black
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});