import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';

const ChartComponent = () => {
  const [data, setData] = useState([]);
  const [tradeCode, setTradeCode] = useState('close');

  useEffect(() => {
    fetchData(tradeCode);
  }, [tradeCode]);

  const fetchData = async (selectedTradeCode) => {
    try {
      const response = await axios.get(`http://localhost:8000?trade_code=${selectedTradeCode}`);
      const chartData = response.data.map(item => ({
        date: item.date, // Date string format
        close: parseFloat(item.close),
        volume: parseInt(item.volume),
      }));

      setData(chartData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const tradeCodeOptions = ['close', 'volume'];

  const chartData = {
    labels: data.map((item) => item.date), // Date strings
    datasets: [
      {
        label: 'Close',
        data: data.map((item) => item.close),
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
        yAxisID: 'y1', // Assign "y1" to the y-axis
      },
      {
        label: 'Volume',
        data: data.map((item) => item.volume),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        yAxisID: 'y2', // Assign "y2" to the y-axis
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'time', // Set x-axis scale type to 'time'
        time: {
          unit: 'day', // Adjust date format as needed
          parser: 'DD-MM-YYYY', // Parse date format
        },
        beginAtZero: true,
      },
      y1: {
        type: 'linear',
        position: 'left',
        beginAtZero: true,
        display: true,
        title: {
          display: true,
          text: 'Close',
        },
      },
      y2: {
        type: 'linear',
        position: 'right',
        beginAtZero: true,
        display: tradeCode === 'volume',
        title: {
          display: true,
          text: 'Volume',
        },
      },
    },
  };

  return (
    <div>
      <h1>Multi-Axis Line and Bar Chart</h1>
      <label htmlFor="tradeCodeSelect">Select Trade Code:</label>
      <select
        id="tradeCodeSelect"
        onChange={(e) => setTradeCode(e.target.value)}
        value={tradeCode}
      >
        {tradeCodeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Line data={chartData} options={chartOptions} />
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ChartComponent;
