import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = (props) => {
  //   const [dataGroup, setData] = useState([]);

  console.log(props.pieInflow);

  const inflow = props.pieInflow;
  const outflow = props.pieOutflow;

  const series = [inflow, outflow];
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

  return (
    <div>
      <ReactApexChart
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
