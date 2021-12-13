import React from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'



function CategoriesScreen({ navigation }) {

    const renderGridItem = (itemData) => {
        return <TouchableOpacity onPress={() => navigation.navigate('CategoryMeals')}>
            <View style={styles.grid}>
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