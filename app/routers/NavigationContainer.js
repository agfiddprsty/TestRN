import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './TabNavigator';

const NavigationContainerExt = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default NavigationContainerExt;
