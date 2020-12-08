import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/LoginView';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    // <WelcomeScreen />
    <Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
