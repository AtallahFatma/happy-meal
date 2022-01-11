import React from 'react';
import { StyleSheet, Text } from 'react-native';

function DefaultText(props) {
    return (
        <Text style={styles.text}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'OpenSans'
    }
})

export default DefaultText;