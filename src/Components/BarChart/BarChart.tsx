import React, { useState, useEffect } from "react";
import { Chart, BarElement, CategoryScale, LinearScale} from "chart.js";
import { Bar } from 'react-chartjs-2';
import userEvent from "@testing-library/user-event";

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale
);

const BarChart = () => {

  // const [barThickness, setBarThickness] = useState(22);
  const [fontSize, setFontSize] = useState(20);
  const [categoryPercentage, setCategoryPercentage] = useState(0.8);
  const [barPercentage, setBarPercentage] = useState(0.7);
  const [tickPadding, setTickPadding] = useState(3)

  const adjustChartProperties = () => {
    const width = window.innerWidth;

    if (width <=500) {
      setBarPercentage(0.8)
      setCategoryPercentage(0.6)
      setFontSize(11)
      setTickPadding(6)
    } else if(width <= 850) {
      setBarPercentage(0.6)
      setCategoryPercentage(0.6)
      setFontSize(18)
      setTickPadding(4)
    } else {
      setBarPercentage(0.7)
      setCategoryPercentage(0.8)
      setFontSize(20)
      setTickPadding(3)
    }
  };

  useEffect(() => {
    adjustChartProperties();
    //Check for resize event
    window.addEventListener('resize', adjustChartProperties);

    //Remove Event Listener
    return () => {
      window.removeEventListener('resize', adjustChartProperties);
    }

  },[]);

  const options = {
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
            size: fontSize,
            family: 'Raleway, sans-serif'
          },
          padding: tickPadding
        }, 
      }
    }
  };
  
  const data = {
    labels: ['JavaScript','React', 'CSS', 'HTML', 'WordPress', 'PHP', 'PostgreSQL', 'Knex', 'Node.js', 'Python', 'C++'],
    datasets: [{
      data:[100, 100, 100, 100, 90, 70, 70, 70, 60, 50, 40],
      backgroundColor: 'rgba(42, 157, 143)',
      borderColor: 'rgba(42, 157, 143)',
      borderWidth: 1,
      barPercentage: barPercentage,
      categoryPercentage: categoryPercentage
    }]
  }

  return (
    <Bar options={options} data={data} />
  )

}

export default BarChart;