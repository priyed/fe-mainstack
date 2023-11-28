import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { ChartData, ScatterDataPoint, ChartOptions } from "chart.js";
import { Box } from "@mui/material";
import { spacing } from "@mui/system";
import { alpha } from "@mui/material/styles";

import LineChart from "./LineChart";

const ChartContainer = styled(Box)`
  max-width: 765px;
  height: 257px;
  margin-top: 20px;
  font-family: "Work Sans", sans-serif;
`;

function BalanceChart() {
  const data = {
    labels: ["Apr 1 2022", "Apr 30 2022"],
    datasets: [
      {
        borderColor: "#FF5403",
        tension: 0.4,
        data: [1, 1, 1, 2, 1, 3, 1, 1, 0, 1, 1, 1],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0,0,0,0.0)",
        },
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0)",
          fontColor: "#fff",
        },
        display: false,
      },
    },
  };

  return (
    <ChartContainer mb={6}>
      <LineChart options={options} data={data} />
    </ChartContainer>
  );
}

export default BalanceChart;
