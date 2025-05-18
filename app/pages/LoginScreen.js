import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('http://192.168.29.176:3000/login', { email, password });
      Alert.alert('Success', 'Login successful');
      navigation.navigate('home');
    } catch (err) {
      Alert.alert('Error', err.response?.data?.error || 'Something went wrong');
    }
  };
// mongodb+srv://aroramanank1234:UWv5CKpnWfvygA7N@cluster0.akvkmnz.mongodb.net/
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.redirectText}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('signup')}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f7f8fc',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  redirectText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  link: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
