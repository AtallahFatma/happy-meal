import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

function MealItem({ title, onSelectMeal, duration, complexity, affordability, image }) {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android') {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.mealItem}>
            <TouchableCmp onPress={onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealHeader, ...styles.mealRow }}>
                        <ImageBackground source={{ uri: image }} style={styles.image}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealDetail, ...styles.mealRow }}>
                        <Text>{duration}m</Text>
                        <Text>{complexity.toUpperCase()}</Text>
                        <Text>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableCmp>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: colors.lightGrey,
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'OpenSansBold',
        fontSize: 20,
        color: colors.white,

        textAlign: 'center'
    }
})

export default MealItem;