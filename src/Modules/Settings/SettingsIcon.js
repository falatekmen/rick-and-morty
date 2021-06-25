import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import {Images} from '../../StylingConstants';
import { useThemedStyles } from '../Theming/CustomHooks/ThemingHooks';
import { Metrics} from '../../StylingConstants';

const getStyles = Color => StyleSheet.create({
    iconContainer: {
        width: Metrics.width * 0.06,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.marginHorizontal,
    },
    image: {
        width: undefined,
        height: '180%',
        aspectRatio: 1,
        resizeMode: 'contain',
        justifyContent:'center',
        alignContent:'center'
    },
    authLogoContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCon: {
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 40,
    }
})

const SettingsIcon = props => {
    
    const styles = useThemedStyles(getStyles);
    const navigation = useNavigation();

    return (
        <View style={styles.iconCon}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("settings-screen")}>
            <View style={styles.authLogoContainer}>
                <Image style={styles.image} source={Images.settings} /> 
            </View>
        </TouchableOpacity>
        </View>
    )
}

export default SettingsIcon;