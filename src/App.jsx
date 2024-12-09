import React, { useState } from 'react';
import './App.css'

function App() {


  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBMI] = useState();
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const bmiValue = weight / (height / 100) ** 2;
    setBMI(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  return (
    <>
    
    <div className="bmi-calculator">
      <h1 style={{textAlign:'center'}}>BMI Calculator</h1>
      <form>
        <div className="form-group">
          <label>Weight :</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.valueAsNumber)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Height :</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.valueAsNumber)}
            className="form-control"
          />
        </div>
        <button type="button" onClick={calculateBMI} className="btn btn-primary">
          Calculate BMI
        </button>
      </form>
      <div className="result" style={{borderRadius:'10px'}}>
        <p>BMI: {bmi}</p>
        <p>Category: {category}</p>
      </div>
    </div>

    </>
  )
}

export default App
