import React from "react";
import { nanoid } from "nanoid";
import { TiDelete } from "react-icons/ti";
export default function TableRow({number, time, reason, deleteRow }) {
  let x = reason[0].toUpperCase();
  reason = reason.substr(1, reason.length)
  reason = x + reason;
  return (
    <tr key={nanoid()} className="App-row">
      <td className="App-No" key={nanoid()}></td>
      <th className="App-ID" key={nanoid()}>{number}</th>
      <td key={nanoid()} className="App-reason">{reason}</td>
      <td className="App-time" key={nanoid()}>{time}</td>
      <td className="App-user" key={nanoid()}>Admin01</td>
      <td className="delete" key={nanoid()}>
        <TiDelete onClick={(e) => deleteRow(number, e)} />
      </td>
    </tr>
  );
}

