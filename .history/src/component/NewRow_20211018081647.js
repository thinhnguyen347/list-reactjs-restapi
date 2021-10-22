import { TiDelete } from "react-icons/ti";
export default function NewRow({id, number, time, reason, deleteRow }) {
  return (
    <tr key={id}>
      <td>{number}</td>
      <td>{reason}</td>
      <td>{time}</td>
      <td>Admin01</td>
      <td className="delete">
        <TiDelete onClick={(e) => deleteRow(number, e)} />
      </td>
    </tr>
  );
}
