import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { keyText } = this.props;
    return (
      <span className="calc-button">{ keyText }</span>
    );
  }
}

Button.propTypes = {
  keyText: PropTypes.string.isRequired,
};

export default Button;
