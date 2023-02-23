import {View, Text} from 'react-native';
import React from 'react';
import AuthNavigator from './Auth/AuthNavigator';
import HomeNavigator from './Home/HomeNavigator';
import {useSelector} from 'react-redux';

const MainNavigator = () => {
  const isAuthChecked = useSelector(state => state.AuthCheck.AuthStatus);
  console.log(isAuthChecked);
  return <>{isAuthChecked === true ? <HomeNavigator /> : <AuthNavigator />}</>;
};

export default MainNavigator;
