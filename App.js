import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Login from './app/views/user/Login';
import Loading from './app/views/Loading';
import Main from './app/views/Main/Main';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const privateAppStack = createStackNavigator(
    {
      mainScreen: {
          screen: Main
         
      },
    }
);

const AuthLoading = createStackNavigator(
  {
    AuthLoading: {
        screen: Loading
    }
  }
);

const publicAuthenticationStack = createStackNavigator(
    { Login: { screen: Login } }
);

const SwitchNavigator = createSwitchNavigator({
      AuthLoading: AuthLoading,
      App: privateAppStack,
      Auth: publicAuthenticationStack,
  },
  {
      initialRouteName: 'AuthLoading',
  },
);
const Container = createAppContainer(SwitchNavigator)
export default App = () =>(
<SafeAreaProvider>
  <NavigationContainer><Container /></NavigationContainer>
</SafeAreaProvider>
)

