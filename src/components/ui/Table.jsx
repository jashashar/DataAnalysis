import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 ">
        <thead>
          <tr className=" border-b">
            {columns.map((col, index) => (
              <th key={index} className="px-4 py-2 text-left font-semibold table-head">
                {col.header} 
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b table-row ">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-2 text-center">
                    {col.accessor ? row[col.accessor] : "-"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-4 py-2 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;