import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "four"],
  ["2013", 1000, 400, 100],
  ["2014", 1170, 460, 200],
  ["2015", 660, 1120, 500],
  ["2016", 1030, 540, 900],
];

export const options = {
  title: "Company Performance",
  hAxis: {
    title: "Year",
    titleTextStyle: { color: "#333" },
  },
  vAxis: { minValue: 0, title: "value", titleTextStyle: { color: "#289518" } },
  chartArea: { width: "50%", height: "30%" },
};

export function SimpleExample() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
