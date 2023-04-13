import React from 'react';
import { StatusBar, View } from 'react-native';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
      <StatusBar />
    </View>
  );
}
