import { TiDelete } from "react-icons/ti";
export default function NewTableRow({number, time, reason, deleteRow }) {
  return (
    <tr>
      <td>{number}</td>
      <td>{reason}</td>
      <td>{time}</td>
      <td className="us">Admin01</td>
      <td className="delete">
        <TiDelete onClick={(e) => deleteRow(number, e)} />
      </td>
    </tr>
  );
}
