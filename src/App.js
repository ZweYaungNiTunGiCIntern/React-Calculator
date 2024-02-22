import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [sum,setSum] = useState(0);
  const handleNum1Change = (e) =>{
    setNum1(Number(e.target.value));
  }
  const handleNum2Change = (e) =>{
    setNum2(Number(e.target.value));
  }
  const calculateSum = () =>{
    setSum(num1+num2)
  }
  return(
    <div className="container text-center mt-5">
      <h3 className="text-center mt-3 pt-3">Calculator</h3>
      <div className="card mx-auto" style={{ width: 450, backgroundColor: '#f8f9fa', border: 'none', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)' }}>
        <div className="card-body">
          <div className="row mt-4 mb-4">
            <div className="col-md-6">
              <label>First Number</label>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" value={num1} onChange={handleNum1Change} />
            </div>
          </div>
          <div className="row mt-4 mb-4">
            <div className="col-md-6">
              <label>Second Number</label>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" value={num2} onChange={handleNum2Change} />
            </div>
          </div>
          <div className="mt-4 mb-4">
            <button className="btn btn-primary" onClick={calculateSum}>Calculate Sum</button>
          </div>
          <h2 className="mt-4">Sum: {sum}</h2>
        </div>
      </div>
    </div>
  )
  
    
}

export default App;
