import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import colors from '../config/colors';
import CategorieMealsScreen from '../screens/CategorieMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

function StackNav() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? colors.primary : ''
                },
                headerTintColor: Platform.OS === 'android' ? colors.white : colors.primary,
                headerTitleStyle: {
                    fontFamily: 'OpenSansBold'
                },
                headerBackTitleStyle: {
                    fontFamily: 'OpenSans'
                }
            }
        }>
            <Stack.Screen
                name="CategoriesScreen"
                component={CategoriesScreen}
                options={{ headerShown: false }}
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
    );
}

export default StackNav;