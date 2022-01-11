import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'

function CategoriesScreen({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        });
    }, [navigation]);

    const renderGridItem = (itemData) => {
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => navigation.navigate('CategoryMeals', {
                categoryId: itemData.item.id
            })}
        />
    }

    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
            navigation={navigation}
        />
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