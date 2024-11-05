import React, { useState, useEffect } from 'react';

function DynamicTable({ rows, cols, unit, productNames, onProductNameChange, onSubmit }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const initialData = Array.from({ length: rows }, () => Array(cols).fill(''));
    setData(initialData);
  }, [rows, cols]);

  const handleInputChange = (e, rowIndex, colIndex) => {
    const newData = [...data];
    newData[rowIndex] = [...newData[rowIndex]];
    newData[rowIndex][colIndex] = e.target.value;
    setData(newData);
  };

  const handleSubmit = () => {
    onSubmit(data);
  };

  const getLabel = (index) => {
    if (unit === 'months') return `Month ${index + 1}`;
    if (unit === 'quarters') return `Quarter ${index + 1}`;
    if (unit === 'semesters') return `Semester ${index + 1}`;
    return `Date ${index + 1}`;
  };

  return (
    <div className="table-container-wrapper">
      <div className="table-container">
        <table border="1" className="responsive-table">
          <thead>
            <tr>
              <th>Product</th>
              {Array.from({ length: cols }).map((_, colIndex) => (
                <th key={colIndex}>{getLabel(colIndex)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>
                  <input
                    type="text"
                    value={productNames[rowIndex]}
                    onChange={(e) => onProductNameChange(e, rowIndex)}
                  />
                </td>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>
                    <input
                      type="number" 
                      value={cell}
                      onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleSubmit} className="button center-button">Generate Forecast</button>
    </div>
  );
}

export default DynamicTable;
