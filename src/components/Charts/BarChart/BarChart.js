import React from 'react';
import './BarChart.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
//   import faker from 'faker';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['Official', 'UnOfficial', 'Without Warranty', 'Used', ];
  
  export const data = {
    labels,
    datasets: [
    //   {
    //     label: 'Dataset 1',
    //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //   },
      {
        label: 'Data',
         data: [30000, 32000, 29000, 15000],
        backgroundColor: '#0095A0',
        barThickness: 26,
        
       
      },
      
    ],
  };
const BarChart = () => {
    return (
        <div className="barChartSection">
             <Bar options={options} data={data} />
        </div>
    );
};

export default BarChart;