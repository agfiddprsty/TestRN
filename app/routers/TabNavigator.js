import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import TabIcon from '../components/TabIcon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStack from './HomeStackNavigator';
import PostStack from './PostStackNavigator';
import MapStack from './MapStackNavigator';
// import {IcHome, IcUsers} from '../configs/svgs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#3BA064',
      tabBarStyle: {
        display: 'flex',
      },
    }}>
    <Tab.Screen
      name="Todo"
      component={HomeStack}
      options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Feed"
      component={PostStack}
      options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Map"
      component={MapStack}
      options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="map" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
