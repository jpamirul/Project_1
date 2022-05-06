import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const HeatMap = (props) => {
  const [data, setData] = useState([]);

  console.log(data);

  const getBudget = async () => {
    const url = `http://127.0.0.1:8000/api/budget-details/`;
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
    });
    const retrieveData = await response.json();
    setData(retrieveData);
  };

  //   const mapData = data.map((item) => {
  //     return { balance: item.balanceFlow };
  //   });

  useEffect(() => {
    getBudget();
  }, []);

  const testdata = [4, 8, 0, 800];
  const testdata2 = [-2, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const mapData = data.map((item) => {
    return { x: item.date, y: item.balanceFlow };
  });

  //   console.log(mapData);
  const series = [
    // {
    //   name: "Day",
    //   data: mapData,
    // },
    {
      name: "",
      data: mapData,
    },
  ];

  const options = {
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [
            {
              from: -100000000,
              to: -1,
              color: "#A10000",
              name: "Badflow",
            },
            {
              from: 1,
              to: 10000000,
              color: "#00A100",
              name: "Goodflow",
            },
          ],
          //   inverse: true,
        },
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="heatmap" height={350} />
    </div>
  );
};

export default HeatMap;
