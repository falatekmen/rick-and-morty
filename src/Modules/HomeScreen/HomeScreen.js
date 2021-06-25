import React from 'react';
import { View, } from 'react-native';
import { useThemedValues } from '../Theming';
import getStyles from "./Styles/HomeScreenStyles";


const HomeScreen = () => {
    const { styles, colors } = useThemedValues(getStyles);

    return (
           <View style={styles.container}></View>
    );
};

export default HomeScreen;