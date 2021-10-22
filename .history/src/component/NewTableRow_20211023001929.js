import React from "react";
import { nanoid } from "nanoid";
import { TiDelete } from "react-icons/ti";
export default function NewTableRow({number, time, reason, deleteRow }) {
  let x = reason[0].toUpperCase();
  reason.splice(0,1)
  return (
    <tr key={nanoid()}>
      <td className="App-No" key={nanoid()}>{number}</td>
      <td key={nanoid()} className="App-reason">{reason}</td>
      <td className="App-time" key={nanoid()}>{time}</td>
      <td className="App-user" key={nanoid()}>Admin01</td>
      <td className="delete" key={nanoid()}>
        <TiDelete onClick={(e) => deleteRow(number, e)} />
      </td>
    </tr>
  );
}

