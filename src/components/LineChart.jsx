"use client";

// LineChart.js
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';

const LineChart = ({ percentile }) => {
  const [series, setSeries] = useState([
    {
      name: 'Percentile',
      data: [50, 500, 850, 200, 100],
    },
    {
      name: 'Number of Student',
      data: [0, 25, 250, 400, 20],
    },
  ]);

  useEffect(() => {
    const updatedSeries = [
      {
        name: 'Percentile',
        data: [0, 225, 320, 75, percentile],
      },
      {
        name: 'Number of Student',
        data: [0, 25, 250, 400, 20],
      },
    ];
    setSeries(updatedSeries);
  }, [percentile]);

  const chartConfig = {
    series: series,
    chart: {
      type: 'line',
      height: 280,
      toolbar: {
        show: false,
      },
    },
    title: {
      show: '',
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#0000FF', '#FF0000'], // Ensure different colors for different series
    stroke: {
      lineCap: 'round',
      curve: 'smooth',
      width: [2, 2], // Adjust stroke width for each line
    },
    markers: {
      size: 0, // Hide markers (dots) on the lines
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
      categories: [0, 25, 50, 75, 100],
    },
    yaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: '#f1f1f1',
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: 'dark',
    },
    annotations: {
      xaxis: [
        {
          x: 50,
          borderColor: '#000',
          label: {
            style: {
              color: '#fff',
              background: '#000',
            },
            text: '50',
          },
        },
      ],
    },
    legend: {
      show: false, // Hide legend
    },
  };

  return (
    <div className="pt-6 px-2 pb-0">
      <ApexCharts options={chartConfig} series={series} type="line" height={300} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(LineChart), { ssr: false });
