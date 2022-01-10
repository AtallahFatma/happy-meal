import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import colors from './config/colors';
import CategoriesScreen from './screens/CategoriesScreen';
import CategorieMealsScreen from './screens/CategorieMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  })
}

const Stack = createNativeStackNavigator();
const MealsTabNavigartor = createBottomTabNavigator();


function HomeTabs() {
  return (
    <MealsTabNavigartor.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
      }}>
      <MealsTabNavigartor.Screen
        name="Meals"
        component={CategoriesScreen}
        options={{
          headerTitle: '',
          tabBarActiveTintColor: colors.orange,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant" size={size} color={color} />)
        }} />
      <MealsTabNavigartor.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-border" size={size} color={color} />
          )
        }} />
    </MealsTabNavigartor.Navigator>
  );
}

export default function App() {
  const [FontLoaded, setFontLoaded] = useState(false);

  if (!FontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={console.warn} />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? colors.white : colors.primary,
        }
      }>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
        />
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{ title: 'Categories screen' }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategorieMealsScreen}
          options={
            ({ route }) => ({ title: route.params.title })
          }
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
