import React from "react";
import "./style.css";

export default function Table({ columns, data }) {
console.log(data)
  return (
    <div className="table-container">
      <table className="custom-table" style={{ width: '100%', tableLayout: 'fixed' }}>
        <colgroup>
          {columns.map((column) => (
            <col key={column.key} style={{ width: column.width || 'auto' }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {columns.map((column) => (
              <th 
                key={column.key} 
                style={{ 
                  textAlign: column.align || "right",
                  padding: 'var(--space-m)'
                }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id || index}>
              {columns.map((column) => (
                <td 
                  key={column.key} 
                  style={{ 
                    textAlign: column.align || "right",
                    padding: 'var(--space-m)'
                  }}
                >
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}