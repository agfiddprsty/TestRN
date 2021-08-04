import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Loading extends React.Component {
  render() {
    const {customStyles} = this.props;
    const containerStyles = [customStyles, styles.container];

    return (
      <View style={containerStyles}>
        <View>
          <ActivityIndicator color="#3BA064" size="large" />
        </View>
      </View>
    );
  }
}

Loading.propTypes = {
  customStyles: PropTypes.object,
};

Loading.defaultProps = {
  customStyles: {},
};
