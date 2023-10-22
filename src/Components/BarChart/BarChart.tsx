import React from "react";
import { Chart, BarElement, CategoryScale, LinearScale} from "chart.js";
import { Bar } from 'react-chartjs-2';

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        color: '#FFFFFF',
        font: {
          size: 20,
          family: 'Raleway, sans-serif'
        },
      }, 
    }
  }
};

export const data = {
  labels: ['JavaScript','React', 'CSS', 'HTML', 'WordPress', 'PHP', 'PostgreSQL', 'Knex', 'Node.js', 'Python', 'C++'],
  datasets: [{
    data:[100, 100, 100, 100, 90, 70, 70, 70, 60, 50, 40],
    backgroundColor: 'rgba(42, 157, 143)',
    borderColor: 'rgba(42, 157, 143)',
    borderWidth: 1,
    barThickness: 22
  }]
}

const BarChart = () => {

  return (
    <Bar options={options} data={data}/>
  )

}

export default BarChart;