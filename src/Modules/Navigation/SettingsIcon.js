import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import {Images} from '../../StylingConstants';
import { useThemedStyles } from '../Theming/CustomHooks/ThemingHooks';
import getStyles from "./Styles/SettingsIconStyles";


const SettingsIcon = props => {
    
    const styles = useThemedStyles(getStyles);
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("settings-screen")}>
                <Image style={styles.image} source={Images.settings} /> 
        </TouchableOpacity>
    )
}

export default SettingsIcon;