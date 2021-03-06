import { useState, useEffect } from 'react';
import styles from './Calculator.module.css';
import Button from '../UI/Button/Button';
import calculate from '../../logic/calculate';

const buttons = [
  {
    id: Math.random(),
    text: 'AC',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '+/-',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '%',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '÷',
    backgroundColor: 'orange',
  },
  {
    id: Math.random(),
    text: '7',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '8',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '9',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: 'x',
    backgroundColor: 'orange',
  },
  {
    id: Math.random(),
    text: '4',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '5',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '6',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '+',
    backgroundColor: 'orange',
  },
  {
    id: Math.random(),
    text: '1',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '2',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '3',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '-',
    backgroundColor: 'orange',
  },
  {
    id: Math.random(),
    text: '0',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '.',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '=',
    backgroundColor: 'orange',
  },
];

const Calculator = () => {
  const [currentObject, setCurrentObject] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [inputValue, setInputValue] = useState('0');

  const buttonsClickHandler = (e) => {
    const valueObject = calculate(currentObject, e.target.textContent);

    if (valueObject.total?.includes('divide by 0.') && valueObject.operation) {
      valueObject.total = null;
      valueObject.operation = null;
    }

    if (valueObject.total !== undefined || valueObject.next !== undefined) {
      setCurrentObject(valueObject);
    }
  };

  useEffect(() => {
    let value = `${currentObject.total ?? ''}${currentObject.operation ?? ''}${
      currentObject.next ?? ''
    }`;
    if (value.length === 0) {
      value = '0';
    }
    setInputValue(value);
  }, [currentObject]);

  return (
    <div className={styles.container}>
      <div className="math">
        <h2>Let&#39;s do some math!</h2>
      </div>
      <div className="calcWrapper">
        <div className={styles.calculator}>
          <input
            className={styles.calculator__output}
            value={inputValue}
            data-testid="result"
            disabled
          />
          {buttons.map((button) => (
            <Button
              key={button.id}
              text={button.text}
              backgroundColor={button.backgroundColor}
              onClick={buttonsClickHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
