import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
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
        return <View>
            <Text>{itemData.item.title}</Text>
        </View>
    }

    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen: </Text>
            <View>
                <FlatList
                    data={displayedMeals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMealItem} />
            </View>
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

export default CategorieMealsScreen;