import React, { useState } from 'react';
import DynamicTable from './components/DynamicTable';
import ForecastChart from './components/ForecastChart';
import './styles.css'; 

function App() {
  const [step, setStep] = useState(1);  
  const [rows, setRows] = useState(3);  
  const [cols, setCols] = useState(3);  
  const [data, setData] = useState([]);  
  const [unit, setUnit] = useState('months'); 
  const [productNames, setProductNames] = useState([]);  
  const [alpha, setAlpha] = useState(0.5); 

  
  const handleSubmitConfig = (e) => {
    e.preventDefault();
    const initialProductNames = Array.from({ length: rows }, (_, index) => `Product ${index + 1}`);
    setProductNames(initialProductNames);
    setStep(2);  
  };

  
  const handleDataSubmit = (submittedData) => {
    setData(submittedData);  
  };


  const exponentialSmoothing = (data, alpha) => {
    return data.map((productData) => {
      let forecast = [productData[0]];  
      for (let i = 1; i < productData.length; i++) {
        const nextForecast = alpha * productData[i] + (1 - alpha) * forecast[i - 1];
        forecast.push(nextForecast);
      }
      const lastObserved = productData[productData.length - 1];
      const lastForecast = forecast[forecast.length - 1];
      const nextPeriodForecast = alpha * lastObserved + (1 - alpha) * lastForecast;

      return {
        forecast,
        nextPeriodForecast,
      };
    });
  };

  const smoothedData = exponentialSmoothing(data, alpha);

  return (
    <div className="dashboard-container">
      <h1>Sales Forecast App</h1>

      {step === 1 && (
        <form onSubmit={handleSubmitConfig} className="config-form">
          <div className="dashboard-card">
            <label>Number of Products:</label>
            <input
              type="number"
              value={rows}
              onChange={(e) => setRows(Number(e.target.value))}
              min="1"
              className="input-field"
            />
          </div>
          <div className="dashboard-card">
            <label>Number of Dates:</label>
            <input
              type="number"
              value={cols}
              onChange={(e) => setCols(Number(e.target.value))}
              min="1"
              className="input-field"
            />
          </div>
          <div className="dashboard-card pepe">
            <label>Time Unit:</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)} className="select-field">
              <option value="months">Months</option>
              <option value="quarters">Quarters</option>
              <option value="semesters">Semesters</option>
            </select>
          </div>
          <button type="submit" className="button">Next</button>
        </form>
      )}
      
      {step === 2 && (
        <>
          <button onClick={() => setStep(1)} className="button">Back to Configuration</button>
          <DynamicTable
            rows={rows}
            cols={cols}
            unit={unit}
            productNames={productNames}
            onProductNameChange={(e, index) => {
              const newProductNames = [...productNames];
              newProductNames[index] = e.target.value;
              setProductNames(newProductNames);
            }}
            onSubmit={handleDataSubmit}
          />

          <div className="alpha-control">
            <h3>Adjust α (Alpha)</h3>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={alpha}
              onChange={(e) => setAlpha(Number(e.target.value))}
            />
            <p>Current α value: {alpha}</p>
          </div>

          {data.length > 0 && (
            <>
              <h3>Smoothed Forecast</h3>
              <ForecastChart data={smoothedData} productNames={productNames} originalData={data} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
