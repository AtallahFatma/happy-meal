import React, { useLayoutEffect } from 'react';
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
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
        return <TouchableOpacity
            style={styles.grid}
            onPress={() => navigation.navigate('CategoryMeals', {
                categoryId: itemData.item.id
            })}>
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>

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
    },
    grid: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoriesScreen;