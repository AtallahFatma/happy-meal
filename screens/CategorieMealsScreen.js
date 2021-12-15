import React, { useLayoutEffect } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import { CATEGORIES } from '../data/dummy-data';

function CategorieMealsScreen({ route, navigation }) {
    const { categoryId } = route.params;

    const selectedGategory = CATEGORIES.find(cat => cat.id === categoryId);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: selectedGategory.title,
        });
    }, [navigation, route]);

    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen: </Text>
            <Text>{selectedGategory.title}</Text>
            <Button
                title="Go to meal detail!"
                onPress={() => navigation.navigate('MealDetail')}
            />
            <Button title="Go back"
                onPress={() => navigation.pop()}
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

export default CategorieMealsScreen;