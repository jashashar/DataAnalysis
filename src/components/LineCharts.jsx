import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { useCubeQuery } from '@cubejs-client/react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineCharts = ( { query }) => {

  const { resultSet, isLoading, error, progress } = useCubeQuery(query);

  if (isLoading) {
    return (
      <div>
        {(progress && progress.stage && progress.stage.stage) || "Loading..."}
      </div>
    );
  }

  if (error) {
    return <div>{error.toString()}</div>;
  }

  if (!resultSet) {
    return null;
  }

  const dataResult = {
    labels: resultSet.chartPivot().map((row) => row.x.split("T")[0]),
    datasets: resultSet.series().map((item) => {
      return {
        fill: 'line',
        label: item.title,
        data: item.series.map(({ value }) => value)
      };
    }),
  };

  return (
    <Line
      className='line-chart-card'
      data={{
        labels : dataResult.labels,
        datasets : dataResult.datasets, 
      }}
      options={{
        legend: {
          position: "bottom",
          align: "start",
        },
      }}
    />
  );
}

export default LineCharts;
