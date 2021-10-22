import React from "react";
import { TiDelete } from "react-icons/ti";
export default function NewTableRow({number, time, reason, deleteRow }) {
  return (
    <tr>
      <td className="App-No">{number}</td>
      <td>{reason}</td>
      <td className="App-time">{time}{Date.now().toLocaleString}</td>
      <td className="App-user">Admin01</td>
      <td className="delete">
        <TiDelete onClick={(e) => deleteRow(number, e)} />
      </td>
    </tr>
  );
}

export const MemoizedNewTable = React.memo(NewTableRow);
