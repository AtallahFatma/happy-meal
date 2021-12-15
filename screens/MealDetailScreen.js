import React, { useLayoutEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealDetailScreen({ route, navigation }) {
    const { mealId } = route.params;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: selectedMeal.title,
        });
    }, [navigation, route]);

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