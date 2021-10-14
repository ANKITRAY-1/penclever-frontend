import React from "react";
import Chart from "react-google-charts";

export const Maingraph = () => {
  return (
    <div>
      <Chart
        width={"auto"}
        height={"400px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["x", "View", "Likes", "Share", "Followers"],
          [0, 0, 0, 0, 0],
          [1 , 10, 8, 5, 1],
          [2, 23, 15, 9, 6],
          [3, 17, 9, 1, 8],
          [4, 18, 10, 8, 13],
          [5, 9, 5, 9, 8],
          [6, 11, 3, 8, 9],
          [7, 27, 19, 2, 18],
        ]}
        options={{
          hAxis: {
            title: "Date",
          },
          vAxis: {
            title: "Popularity",
          },
          series: {
            0: { curveType: 'function' },
            1: { curveType: 'function' },
            2: { curveType: 'function' },
            3: { curveType: 'function' },
          },
        }}
        rootProps={{ "data-testid": "4" }}
      />
    </div>
  );
};
