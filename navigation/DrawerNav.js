import React from 'react';
import TabsBottomNav from './TabsBottomNav';
import FiltersScreen from '../screens/FiltersScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../config/colors';

function MainNavigator() {
    const Drawer = createDrawerNavigator();

    const FiltersStack = () => {
        const FiltersNavigator = createNativeStackNavigator();

        return (
            <FiltersNavigator.Navigator>
                <FiltersNavigator.Screen
                    name="FiltersScreen"
                    component={FiltersScreen}
                    options={{
                        headerTitle: 'Filter meals',
                    }}
                />
            </FiltersNavigator.Navigator>
        )
    }


    return (
        <Drawer.Navigator screenOptions={{
            headerTintColor: colors.primary,
            drawerActiveTintColor: colors.primary,
            drawerLabelStyle: {
                fontFamily: 'OpenSansBold',
                fontSize: 16
            }
        }}>
            <Drawer.Screen name="MealsFavs"
                component={TabsBottomNav} options={{
                    drawerLabel: 'Meals',
                    title: 'Happy meal',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: colors.primary
                    },
                }} />
            <Drawer.Screen name="Filters" component={FiltersStack} />
        </Drawer.Navigator>
    );
}

export default MainNavigator;