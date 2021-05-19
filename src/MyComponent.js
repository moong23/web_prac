import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favnum, children}) => {
  return (
    <div style={main}>
      hello my name is {name}!<br />
      children value is {children}.<br />
      my favorite number is {favnum}.
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'no insertion!',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favnum: PropTypes.number.isRequired,
};

export default MyComponent;

const main = {
  backgroundColor: 'green',
  color: 'aqua',
  fontSize: '48px',
  fontWeight: 'bold',
  padding: '16px',
};
