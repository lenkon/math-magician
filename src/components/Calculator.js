import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [dataCalc, calcHelper] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const inputCalc = (event) => {
    calcHelper(calculate(dataCalc, event.target.textContent));
  };

  return (
    <section className="main-container calc-main-container">
      <h2 className="title-calculator">Let&apos;s do some math!</h2>
      <div className="calculator-container">
        <input className="calc-total" type="text" value={dataCalc.next || dataCalc.total || '0'} />
        <div className="calc-buttons-container">
          <button type="button" className="calc-button" onClick={inputCalc}>AC</button>
          <button type="button" className="calc-button" onClick={inputCalc}>+/-</button>
          <button type="button" className="calc-button" onClick={inputCalc}>%</button>
          <button type="button" className="calc-button" onClick={inputCalc}>÷</button>
          <button type="button" className="calc-button" onClick={inputCalc}>7</button>
          <button type="button" className="calc-button" onClick={inputCalc}>8</button>
          <button type="button" className="calc-button" onClick={inputCalc}>9</button>
          <button type="button" className="calc-button" onClick={inputCalc}>x</button>
          <button type="button" className="calc-button" onClick={inputCalc}>4</button>
          <button type="button" className="calc-button" onClick={inputCalc}>5</button>
          <button type="button" className="calc-button" onClick={inputCalc}>6</button>
          <button type="button" className="calc-button" onClick={inputCalc}>-</button>
          <button type="button" className="calc-button" onClick={inputCalc}>1</button>
          <button type="button" className="calc-button" onClick={inputCalc}>2</button>
          <button type="button" className="calc-button" onClick={inputCalc}>3</button>
          <button type="button" className="calc-button" onClick={inputCalc}>+</button>
          <button type="button" className="calc-button" onClick={inputCalc}>0</button>
          <button type="button" className="calc-button" onClick={inputCalc}>.</button>
          <button type="button" className="calc-button" onClick={inputCalc}>=</button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
