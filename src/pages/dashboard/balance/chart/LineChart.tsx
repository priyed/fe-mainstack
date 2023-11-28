import { Line } from "react-chartjs-2";
import { ChartData, ScatterDataPoint, PointElement } from "chart.js";
import "chart.js/auto";

interface LineChartProps {
  options: object;
  data: ChartData<"line", (number | ScatterDataPoint | null)[], unknown>;
}

const LineChart = ({ options, data }: LineChartProps) => {
  return <Line data={data} options={options} />;
};

export default LineChart;
