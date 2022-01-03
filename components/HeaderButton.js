import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Platform, Text, View } from 'react-native';

import colors from '../config/colors';
import { HeaderButton } from 'react-navigation-header-buttons';

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? colors.white : colors.black}
        />
    );
}

export default CustomHeaderButton;