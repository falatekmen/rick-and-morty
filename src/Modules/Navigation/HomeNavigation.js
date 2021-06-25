import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from "../Settings/SettingsScreen";
import HomeScreen from '../HomeScreen/HomeScreen';
import SettingsIcon from '../Settings/SettingsIcon';
import { texts, useLocalization } from "../Localization";
import { colorNames, useThemedValues } from "../Theming";
import getStyles from "./Styles/HomeNavigationStyles";
import { Fonts } from '../../StylingConstants';


const HomeStack = createStackNavigator();

const HomeNavigation = () => {
    
    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="home-screen"
                component={HomeScreen}
                options={{
                    title: loc.t(texts.homeTitle),
                    headerStyle: {
                        backgroundColor: colors[colorNames.home.headerColor],
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: colors[colorNames.home.headerText],
                        fontFamily: Fonts.type.bold
                    },
                    headerRight: SettingsIcon
                }}
            />
            <HomeStack.Screen
                name="settings-screen"
                component={SettingsScreen}
                options={{
                    title: loc.t(texts.settings),
                    headerStyle: {
                        backgroundColor: colors[colorNames.settings.headerColor]

                    },
                    headerTitleAlign: "center",
                    headerTintColor: colors[colorNames.settings.tintColor],
                    headerTitleStyle: {
                        color: colors[colorNames.home.headerText],
                        fontFamily: Fonts.type.bold
                    }
                }}
            />  
        </HomeStack.Navigator>
    );
};

export default HomeNavigation;