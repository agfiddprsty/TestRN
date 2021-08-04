import {StyleSheet} from 'react-native';

import {widthByScreen, heightByScreen} from '../../../utils/dimensions';

const container = {
  width: widthByScreen(100),
  height: heightByScreen(100),
};

const styles = StyleSheet.create({
  container: {
    ...container,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
});

export default styles;
