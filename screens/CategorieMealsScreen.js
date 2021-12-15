import React, { useLayoutEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function CategorieMealsScreen({ route, navigation }) {
    const { title } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: title,
            headerStyle: {
                backgroundColor: colors.orange,
            },
            headerTintColor: colors.white,
        });
    }, [navigation, route]);

    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen: {JSON.stringify(title)}</Text>
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