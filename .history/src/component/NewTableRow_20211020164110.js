import React from "react";
import { nanoid } from "nanoid";
import { TiDelete } from "react-icons/ti";
export default function NewTableRow({number, time, reason, deleteRow }) {
  return (
    <tr key={nanoid()}>
      <td className="App-No" key={nanoid()}>{number}</td>
      <td key={nanoid()}>{reason}</td>
      <td className="App-time" key={nanoid()}>{time}</td>
      <td className="App-user" key={nanoid()}>Admin01</td>
      <td className="delete" key={number}>
        <TiDelete onClick={(e) => deleteRow(number, e)} />
      </td>
    </tr>
  );
}

