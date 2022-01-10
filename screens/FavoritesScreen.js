import React, { useLayoutEffect } from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Your favorite meals',
        });
    }, [navigation]);

    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        <MealList displayedMeals={favMeals} navigation={navigation} />
    );
}

export default FavoritesScreen;