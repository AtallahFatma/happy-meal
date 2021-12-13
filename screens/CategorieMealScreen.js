import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CategorieMealScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>CategorieMealScreen</Text>
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

export default CategorieMealScreen;