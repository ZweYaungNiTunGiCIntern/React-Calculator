import React, { useState,useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('+');
  
  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const calculateResult = () => {
    let num1Value = parseFloat(num1);
    let num2Value = parseFloat(num2);
    let res = 0;

    switch (operation) {
      case '+':
        res = num1Value + num2Value;
        break;
      case '-':
        if (num1Value < num2Value) {
          setResult('Subtraction results in a negative value');
          alert('Error: Subtraction results in a negative value');
          return;
        } else {
          res = num1Value - num2Value;
          break;
        }
      case '*':
        res = num1Value * num2Value;
        break;
      case '/':
        if (num2Value === 0) {
          setResult('Division by zero');
          alert('Error: Division by zero');
          return;
        } else {
          res = num1Value / num2Value;
          break;
        }
      default:
        res = '';
    }

    setResult(res);
  };

  return (
    <div className="container text-center mt-5">
      <div className="card mx-auto" style={{ width: 450, backgroundColor: '#f8f9fa', border: 'none', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)' }}>
        <h3 className="text-center mt-3 pt-3">Calculator</h3>
        <div className="card-body">
          <div className="row mt-4 mb-4">
            <div className="col-md-6">
              <label>Enter First Number</label>
            </div>
            <div className="col-md-6">
              <input type="number" className="form-control" value={num1} onChange={handleNum1Change} />
            </div>
          </div>
          <div className="row mt-4 mb-4">
            <div className="col-md-6">
              <label>Enter Second Number</label>
            </div>
            <div className="col-md-6">
              <input type="number" className="form-control" value={num2} onChange={handleNum2Change} />
            </div>
          </div>
          <div className="row mt-4 mb-4">
            <div className="col-md-6">
              <label>Select Operator</label>
            </div>
            <div className="col-md-6 text-center">
              <select className="form-control centered-select" value={operation} onChange={handleOperationChange}>
                <option value="+">Add</option>
                <option value="-">Substract</option>
                <option value="*">Multiply</option>
                <option value="/">Divide</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary" onClick={calculateResult}>Calculate</button>

          <h2 className="mt-4">Result: {result}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
