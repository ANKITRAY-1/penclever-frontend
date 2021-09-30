import React from "react";
import Chart from "react-google-charts";

export const Sidegraph = () => {
  return (
    <div>
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["Work", 11],
          ["Eat", 2],
          ["Commute", 2],
          ["Watch TV", 2],
          ["Sleep", 7],
          
        ]}
        options={{
          title: "My Daily Activities",
          // Just add this option
          pieHole: 0.4,
        }}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
};
