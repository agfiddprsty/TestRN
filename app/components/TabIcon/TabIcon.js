import React from 'react';
import PropTypes from 'prop-types';

const TabIcon = ({color, size, Icon}) => {
  return <Icon fill={color} width={size} height={size} />;
};

export default TabIcon;

TabIcon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  Icon: PropTypes.elementType.isRequired,
};
