import "./styles.css";
import React, { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState('');
  const [tes, setTest] = useState('');

  function handleInput() {
    //please put your logic here
    let resultReverse = number.toString().split('').reverse().join('');
    let resultNumber = number - resultReverse;

    if (resultNumber<0) {
      setMessage('The result is not a positive number!')
    } else {
      setMessage('')
    }
    setResult(resultNumber);
  }

  function numberOnly(e) {
    if (
        e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode === 8 // digits 0-9
    ) {
        // let it happen, don't do anything
        setMessage('')
        return true;
    } else {
        setMessage('Only input type number')
        e.preventDefault();
        return false
    }
  };

  function handleChangeInput(e) {
    setNumber(e.target.value)
  }

  return (
    <div className="App">
      <div className="ContentWrap">
        <div>
          <label className="Title">
            Reverse Number
          </label>
          <div className="ContentInput">
            <input
              className="InputNumber"
              value={number}
              onChange={handleChangeInput}
              onKeyDown={numberOnly}
            />
            <button
              className="BtnSubmit"
              onClick={handleInput}
            >
              Submit
            </button>
          </div>
          <div className="Message">
            {
              result < 0
              ? (
              <span>
                {message}
              </span>
              ) : ('')
            }
          </div>
        </div>

        <div style={{paddingTop: '1em'}}>
          <span className="ResultText">
            Result difference
          </span>

          <div className="ResultContent">
            {
              result<0
                ? 0
                : result
            }
          </div>
        </div>
      </div>
    </div>
  );
}
