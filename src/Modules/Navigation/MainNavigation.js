import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';
import AuthNavigation from './AuthNavigation';
import { useSelector } from 'react-redux';
import { userSelector } from '../Auth';

const MainNavigation = (props) => {
  
    const isLoggedInUser = useSelector(userSelector);
    return (
        <NavigationContainer>
            {
                isLoggedInUser ?
                <HomeNavigation />
                :
                <AuthNavigation />
            }
        </NavigationContainer>
    );
};

export default MainNavigation;