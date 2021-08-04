import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Map from '../screen/Map';

const MapStack = createStackNavigator();

const MapStackNavigator = () => (
  <MapStack.Navigator>
    <MapStack.Screen name="Location" component={Map} />
  </MapStack.Navigator>
);

export default MapStackNavigator;
