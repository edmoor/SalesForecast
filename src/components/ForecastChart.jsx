import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ForecastChart({ data, productNames, originalData }) {
  return (
    <div style={{ width: '80%' }}>
      <h3>Forecast Charts by Product</h3>
      {data.map((productData, index) => {
        const labels = productData.forecast.map((_, i) => `Date ${i + 1}`);
        labels.push('Next period');

        const chartData = {
          labels,
          datasets: [
            {
              label: `${productNames[index]} (Actual Sales)`,
              data: originalData[index],
              borderColor: `rgba(0, 117, 255, 0.7)`,
              borderDash: [5, 5],
              fill: false,
            },
            {
              label: `${productNames[index]} (Smoothed Forecast)`,
              data: [...productData.forecast, productData.nextPeriodForecast],
              borderColor: `rgba(44, 217, 255, 0.7)`,
              backgroundColor: 'rgba(44, 217, 255, 0.2)',
              fill: true,
              tension: 0.4,
            },
          ],
        };

        const options = {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              labels: {
                color: '#c8cfca',
              },
            },
            tooltip: {
              backgroundColor: '#1f2933',
              titleColor: '#ffffff',
              bodyColor: '#ffffff',
            },
          },
          scales: {
            x: {
              grid: {
                color: '#56577a',
                borderDash: [5, 5],
              },
              ticks: {
                color: '#c8cfca',
              },
            },
            y: {
              grid: {
                color: '#56577a',
                borderDash: [5, 5],
              },
              ticks: {
                color: '#c8cfca',
              },
            },
          },
        };

        return (
          <div key={index} style={{ marginBottom: '50px' }}>
            <h4 style={{ color: '#c8cfca' }}>{productNames[index]}</h4>
            <Line data={chartData} options={options} />
            <p style={{ color: '#c8cfca' }}>
              Next period forecast: {productData.nextPeriodForecast.toFixed(2)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastChart;
