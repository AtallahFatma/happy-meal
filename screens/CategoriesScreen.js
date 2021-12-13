import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CategoriesScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>CategoriesScreen</Text>
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

export default CategoriesScreen;