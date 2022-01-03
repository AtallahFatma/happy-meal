import React, { useLayoutEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';

import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

function MealDetailScreen({ route, navigation }) {
    const { mealId } = route.params;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: selectedMeal.title,
            headerRight: () => (
                <MaterialIcons name="favorite-outline" size={24} color="black" onPress={() => { console.log('favv') }} />
            )
        });
    }, [navigation]);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button
                title="Go back to categories!"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen;