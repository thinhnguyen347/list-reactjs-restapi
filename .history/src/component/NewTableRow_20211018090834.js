import { TiDelete } from "react-icons/ti";
import { nanoid } from 'nanoid';
export default function NewTableRow({number, time, reason, deleteRow }) {
  return (
    <tr key={n}>
      <td>{number}</td>
      <td>{reason}</td>
      <td className="App-time">{time}</td>
      <td className="App-user">Admin01</td>
      <td className="delete">
        <TiDelete onClick={(e) => deleteRow(number, e)} />
      </td>
    </tr>
  );
}
