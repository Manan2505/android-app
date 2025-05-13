import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('home');
    }, 5500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/loader.json')} // 👈 Your Lottie JSON file
        autoPlay
        loop
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
