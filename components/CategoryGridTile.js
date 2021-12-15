import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Platform, TouchableNativeFeedback } from 'react-native';
import colors from '../config/colors';

function CategoryGridTile({ onSelect, title, color }) {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android') {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp
                style={{ flex: 1 }}
                onPress={onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
                    <Text style={styles.title} numberOfLines={2}>{title}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: { width: 3, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    title: {
        fontSize: 18,
        fontFamily: 'OpenSansBold',
        textAlign: 'right'
    }
})

export default CategoryGridTile;