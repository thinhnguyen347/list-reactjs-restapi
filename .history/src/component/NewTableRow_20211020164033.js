import React from "react";

import { TiDelete } from "react-icons/ti";
export default function NewTableRow({number, time, reason, deleteRow }) {
  return (
    <tr key={number}>
      <td className="App-No" key={number}>{number}</td>
      <td key={number}>{reason}</td>
      <td className="App-time" key={number}>{time}</td>
      <td className="App-user" key={number}>Admin01</td>
      <td className="delete" key={number}>
        <TiDelete onClick={(e) => deleteRow(number, e)} />
      </td>
    </tr>
  );
}

