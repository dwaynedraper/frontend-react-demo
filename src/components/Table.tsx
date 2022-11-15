import React from 'react'

type TableProps = {
  headerData?: any[]
  tableData?: any[]
}

const headerData = ["Name", "Email", "Phone"]

const tableData = [
  [
    "John Doe",
    "john@me.com",
    "123-456-7890"
  ],
  [
    "Jane Doe",
    "jane@me.com",
    "123-456-7890"
  ],
]

export default function Table(props: TableProps) {
  return (
    // Bootstrap table that accepts dynamic data as props and generates a table.
    <div className='App' style={{ alignContent: "center" }}>
      <table className='table table-bordered' style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            {headerData.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {row.map((cell: any, index: any) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
