import React, { useLayoutEffect } from 'react';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

function CategorieMealsScreen({ route, navigation }) {
    const { categoryId } = route.params;
    const selectedGategory = CATEGORIES.find(cat => cat.id === categoryId);

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: selectedGategory.title,
        });
    }, [navigation, route]);

    return (
        <MealList displayedMeals={displayedMeals} navigation={navigation} />
    );
}

export default CategorieMealsScreen;