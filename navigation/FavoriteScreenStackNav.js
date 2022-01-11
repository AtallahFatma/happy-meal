import React from 'react';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function FavoriteScreenStackNav() {
    const FavNavigator = createNativeStackNavigator();

    return (
        <FavNavigator.Navigator>
            <FavNavigator.Screen
                name="FavoritesScreen"
                component={FavoritesScreen}
                options={{
                    headerShown: false
                }}
            />
            <FavNavigator.Screen
                name="MealDetail"
                component={MealDetailScreen}
                options={{ title: 'Meal details' }}
            />
        </FavNavigator.Navigator>
    )
}

export default FavoriteScreenStackNav;