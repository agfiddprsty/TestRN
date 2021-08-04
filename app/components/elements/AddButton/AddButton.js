import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import styles from './styles';

export default class AddButton extends React.Component {
  render() {
    const {customStyle, textRight, add} = this.props;
    const marginLeft = add ? 10 : 0;
    return (
      <View>
        <TouchableOpacity
          onPress={this._onPress}
          style={[styles.container, customStyle]}
          activeOpacity={0.8}
          {...this.props}>
          {add && <MaterialCommunityIcons name="plus" color="#fff" size={15} />}
          <Text style={[styles.text, {marginLeft}]}>{textRight}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AddButton.propTypes = {
  customStyle: PropTypes.object,
  isAddDisabled: PropTypes.bool,
  textRight: PropTypes.string,
  add: PropTypes.bool,
};

AddButton.defaultProps = {
  customStyle: null,
  isAddDisabled: false,
  textRight: '',
  add: false,
};
