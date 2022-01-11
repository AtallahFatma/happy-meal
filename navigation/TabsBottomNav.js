import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import colors from '../config/colors';
import FavoriteScreenStackNav from './FavoriteScreenStackNav';
import { MaterialIcons } from '@expo/vector-icons';
import StackNav from './StackNav';

function TabsBottomNav() {
    const MealsTabNavigartor = createBottomTabNavigator();

    return (
        <MealsTabNavigartor.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
            }}>
            <MealsTabNavigartor.Screen
                name="Meals"
                component={StackNav}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.orange,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="restaurant" size={size} color={color} />)
                }} />
            <MealsTabNavigartor.Screen
                name="Favorites"
                component={FavoriteScreenStackNav}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="favorite-border" size={size} color={color} />
                    )
                }} />
        </MealsTabNavigartor.Navigator>
    );
}

export default TabsBottomNav;