import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function FiltersScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>FiltersScreen</Text>
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

export default FiltersScreen;