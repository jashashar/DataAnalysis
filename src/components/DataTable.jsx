import React from "react";
import Table  from "./ui/Table";
import { useCubeQuery } from "@cubejs-client/react";

const DataTable = ({ query }) => {
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

  const columns = resultSet.tableColumns().map((col) => ({
    header: col.title.replace(/_/g, " "), // Convert to readable format
    accessor: col.key,
  }));

  const data = resultSet.tablePivot();


  return (
    <div className="p-4 bg-white rounded-md shadow">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default DataTable;
