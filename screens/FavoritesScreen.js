import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function FavoritesScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>FavoritesScreen</Text>
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

export default FavoritesScreen;