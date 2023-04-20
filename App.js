import React from 'react';
import { StatusBar, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Navigation />
        <StatusBar />
      </View>
    </Provider>
  );
}
