import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

function MealList({ displayedMeals, navigation }) {

    const renderMealItem = itemData => {
        return <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
                navigation.navigate('MealDetail', {
                    mealId: itemData.item.id
                })
            }} />
    }
    return (
        <View style={styles.screen}>
            <FlatList
                style={styles.list}
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        width: '100%',
    }
})

export default MealList;