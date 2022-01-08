import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);
    this.displayResult = this.displayResult.bind(this);
  }

  calculate(obj, btn) {
    const { updateState } = this.props;
    let newObj;
    try {
      newObj = calculate(obj, btn);
    } catch {
      newObj = {
        total: 'Failed operation by 0',
      };
    }
    this.calculatorObj = newObj;
    updateState(newObj);
  }

  displayResult() {
    const { calculatorObj } = this.props;
    const { total } = calculatorObj;
    const { next } = calculatorObj;
    const { operation } = calculatorObj;
    let result = null;

    if (total === null && next === null) {
      result = 0;
    } else if (next !== null && total === null) {
      result = next;
    } else if (next !== null && total !== null) {
      if (operation !== null && operation !== undefined) {
        result = `${total} ${operation} ${next}`;
      } else {
        result = total;
      }
    } else if (next === null && total !== null) {
      if (operation !== null && operation !== undefined) {
        result = `${total} ${operation}`;
      } else {
        result = total;
      }
    }

    return result;
  }

  render() {
    const { calculatorObj } = this.props;
    return (
      <div id="calculator-container" className="container">
        <div id="result" className="result calc-btn">
          { this.displayResult() }
        </div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, 'AC'); }} onKeyPress={() => { this.calculate(calculatorObj, 'AC'); }}>AC</div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '+/-'); }} onKeyPress={() => { this.calculate(calculatorObj, '+/-'); }}>+/-</div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '%'); }} onKeyPress={() => { this.calculate(calculatorObj, '%'); }}>%</div>
        <div className="op-btn calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '÷'); }} onKeyPress={() => { this.calculate(calculatorObj, '÷'); }}>÷</div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '7'); }} onKeyPress={() => { this.calculate(calculatorObj, '7'); }}>7</div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '8'); }} onKeyPress={() => { this.calculate(calculatorObj, '8'); }}>8</div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '9'); }} onKeyPress={() => { this.calculate(calculatorObj, '9'); }}>9</div>
        <div className="op-btn calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, 'x'); }} onKeyPress={() => { this.calculate(calculatorObj, 'x'); }}>x</div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '4'); }} onKeyPress={() => { this.calculate(calculatorObj, '4'); }}>4</div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '5'); }} onKeyPress={() => { this.calculate(calculatorObj, '5'); }}>5</div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '6'); }} onKeyPress={() => { this.calculate(calculatorObj, '6'); }}>6</div>
        <div className="op-btn calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '-'); }} onKeyPress={() => { this.calculate(calculatorObj, '-'); }}>-</div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '1'); }} onKeyPress={() => { this.calculate(calculatorObj, '1'); }}>1</div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '2'); }} onKeyPress={() => { this.calculate(calculatorObj, '2'); }}>2</div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '3'); }} onKeyPress={() => { this.calculate(calculatorObj, '3'); }}>3</div>
        <div className="op-btn calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '+'); }} onKeyPress={() => { this.calculate(calculatorObj, '+'); }}>+</div>
        <div className="zero-btn calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '0'); }} onKeyPress={() => { this.calculate(calculatorObj, '0'); }}>0</div>
        <div className="calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '.'); }} onKeyPress={() => { this.calculate(calculatorObj, '.'); }}>.</div>
        <div className="op-btn calc-btn" role="button" tabIndex="0" onClick={() => { this.calculate(calculatorObj, '='); }} onKeyPress={() => { this.calculate(calculatorObj, '='); }}>=</div>
      </div>
    );
  }
}

Calculator.propTypes = {
  updateState: PropTypes.func.isRequired,
  calculatorObj: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
