import React, { Component } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Ofert from './Ofert';
import History from './History';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const  Main=()=> {

  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'Ofert') {
              iconName = 'ios-cash';
            } else if (route.name === 'History') {
              iconName = 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Ofert" component={Ofert} />
        <Tab.Screen name="History" component={History} />
      </Tab.Navigator>
    
  );
}


export default Main;