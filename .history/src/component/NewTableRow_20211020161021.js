import React from "react";
import { TiDelete } from "react-icons/ti";
export default function NewTableRow({number, timeStamp, reason, deleteRow }) {
  return (
    <tr>
      <td className="App-No">{number}</td>
      <td>{reason}</td>
      <td className="App-time">{timeStamp}{(new Date()).toLocaleTimeString()}</td>
      <td className="App-user">Admin01</td>
      <td className="delete">
        <TiDelete onClick={(e) => deleteRow(number, e)} />
      </td>
    </tr>
  );
}

