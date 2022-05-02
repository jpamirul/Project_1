import React from "react";
import Chart from "react-apexcharts";

const series = [44, 55];
const labels = ["Money In", "Money Out"];

const options = {
  options: {
    chart: {
      width: 380,
      type: "pie",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "top",
          },
        },
      },
    ],
  },
};

const PieChart = () => {
  return (
    <div>
      <Chart
        labels={labels}
        options={options}
        series={series}
        type="pie"
        height={350}
        width={350}
      />
    </div>
  );
};

export default PieChart;
