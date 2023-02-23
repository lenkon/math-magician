import React from 'react';
import Total from './Total';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const buttons = [
      'AC', '+/-', '%', '÷',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ];

    return (
      <div className="calculator-container">
        <Total />
        <div className="calc-buttons">
          {buttons.map((keyText) => <Button key={keyText.toString()} keyText={keyText} />)}
        </div>
      </div>
    );
  }
}

export default Calculator;
