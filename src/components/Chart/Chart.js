import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = ({ dataPoints }) => {
  const datapointValues = dataPoints.map((data) => data.value);
  const totalMaximum = Math.max(...datapointValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
