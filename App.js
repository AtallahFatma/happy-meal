import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  })
}

export default function App() {
  const [FontLoaded, setFontLoaded] = useState(false);

  if (!FontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={console.warn} />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'OpenSansBold',

  }
});
