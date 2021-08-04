import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screen/Home';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="To-Do List" component={Home} />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
