import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function CategorieMealsScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen</Text>
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