import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function MealDetailScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text>MealDetailScreen</Text>
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