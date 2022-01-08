import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equal: 0,
    };
  }

  render() {
    const { equal } = this.state;
    return (
      <div id="calculator" className="container">
        <div id="equal" className="result">
          { equal }
        </div>
        <div className="calc-btn">AC</div>
        <div className="calc-btn">+/-</div>
        <div className="calc-btn">%</div>
        <div className="op-btn calc-btn">÷</div>
        <div className="calc-btn">7</div>
        <div className="calc-btn">8</div>
        <div className="calc-btn">9</div>
        <div className="op-btn calc-btn">x</div>
        <div className="calc-btn">4</div>
        <div className="calc-btn">5</div>
        <div className="calc-btn">6</div>
        <div className="op-btn calc-btn">-</div>
        <div className="calc-btn">1</div>
        <div className="calc-btn">2</div>
        <div className="calc-btn">3</div>
        <div className="op-btn calc-btn">+</div>
        <div className="zero-btn calc-btn">0</div>
        <div className="calc-btn">.</div>
        <div className="op-btn calc-btn">=</div>
      </div>
    );
  }
}

export default Calculator;
