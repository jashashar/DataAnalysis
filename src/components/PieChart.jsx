import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useCubeQuery } from "@cubejs-client/react";

ChartJS.register(ArcElement, Tooltip, Legend);

const SemiPieChart = ({ query }) => {
  const { resultSet, isLoading, error, progress } = useCubeQuery(query);

  if (isLoading) {
    return <div>{(progress && progress.stage?.stage) || "Loading..."}</div>;
  }

  if (error) {
    return <div>{error.toString()}</div>;
  }

  if (!resultSet) {
    return null;
  }

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384", "#36A2EB", "#FFCE56"];

  const pivotData = resultSet.chartPivot();
  const labels = pivotData.map((row) => row.x);
  const values = pivotData.map((row) => row[resultSet.seriesNames()[0].key]);

  const data = {
    labels,
    datasets: [
      {
        label: "Distribution",
        data: values,
        backgroundColor: COLORS.slice(0, labels.length),
        hoverBackgroundColor: COLORS.slice(0, labels.length),
      },
    ],
  };

  return (
    <Doughnut
      className="pie-chart-card"
      data={data}
      options={{
        responsive: true,
        cutout: "50%", 
        circumference: 180,
        rotation: -90,
        plugins: {
          legend: {
            position: "bottom",
            align: "center",
          },
        },
      }}
    />
  );
};

export default SemiPieChart;
