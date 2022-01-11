import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { createDrawerNavigator } from '@react-navigation/drawer';

import colors from './config/colors';
import CategoriesScreen from './screens/CategoriesScreen';
import CategorieMealsScreen from './screens/CategorieMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import TabsBottomNav from './navigation/TabsBottomNav';
import DrawerNav from './navigation/DrawerNav';
import MainNavigator from './navigation/DrawerNav';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  })
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [FontLoaded, setFontLoaded] = useState(false);

  if (!FontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={console.warn} />
  }

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
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
