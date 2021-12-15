import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItem from '../components/MealItem';
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

    const renderMealItem = itemData => {
        return <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={() => { }} />
    }

    return (
        <View style={styles.screen}>
            <FlatList
                style={styles.list}
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem} />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        width: '100%',
    }
})

export default CategorieMealsScreen;