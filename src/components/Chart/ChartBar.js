import React from "react";

import "./ChartBar.css";
function ChartBar({ label, value, maxValue }) {
  let barfillUp = "0%";

  if (maxValue > 0) {
    barfillUp = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barfillUp }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

export default ChartBar;
