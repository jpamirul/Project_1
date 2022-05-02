import React from "react";
import Chart from "react-apexcharts";

const testdata = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testdata2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const series = [
  {
    name: "Day",
    data: testdata,
  },
  {
    name: "Week",
    data: testdata2,
  },
];

const options = {
  plotOptions: {
    heatmap: {
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 10,
            color: "#00A100",
            name: "Goodflow",
          },
          {
            from: 0,
            to: 10,
            color: "#800000",
            name: "Badflow",
          },
        ],
      },
    },
  },
};

const HeatMap = () => {
  return (
    <div>
      <Chart options={options} series={series} type="heatmap" height={350} />
    </div>
  );
};

export default HeatMap;
