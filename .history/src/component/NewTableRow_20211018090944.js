import { TiDelete } from "react-icons/ti";
import { nanoid } from 'nanoid';
export default function NewTableRow({number, time, reason, deleteRow }) {
  return (
    <tr key={nanoid}>
      <td key={nanoid}>{number}</td>
      <td key={nanoid}>{reason}</td>
      <td key={nanoid} className="App-time">{time}</td>
      <td key={nanoid} className="App-user">Admin01</td>
      <td key={nanoid} className="delete">
        <TiDelete onClick={(e) => deleteRow(number, e)} />
      </td>
    </tr>
  );
}
