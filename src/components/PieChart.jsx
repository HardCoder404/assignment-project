import { useEffect, useRef, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is included

const PieChart = ({ percentile }) => {
  const [series, setSeries] = useState([percentile, 100 - percentile]);

  useEffect(() => {
    setSeries([percentile, 100 - percentile]);
  }, [percentile]);

  const getChartOptions = () => ({
    series,
    colors: ["#1C64F2", "#F3F4F6"], // Blue for filled and black for empty
    chart: {
      height: 320,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%", // Adjust thickness of the donut
          labels: {
            show: false, // Hide donut labels if not needed
          },
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: [], // No labels
    dataLabels: {
      enabled: false, // Ensure data labels are hidden
    },
    legend: {
      show: false, // Hide legend
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "k";
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + "k";
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  });

  return (
    <div className="relative">
      <ApexCharts
        options={getChartOptions()}
        series={series}
        type="donut"
        height={220}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9119/9119230.png"
          alt="Center Icon"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default PieChart;
