import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './screens/CategoriesScreen';
import CategorieMealsScreen from './screens/CategorieMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{ title: 'Categories screen' }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategorieMealsScreen}
          options={{ title: 'Categories meals screen' }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={{ title: 'Meal details' }}
        />
      </Stack.Navigator>
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
