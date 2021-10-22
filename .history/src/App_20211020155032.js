import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Container from "muicss/lib/react/container";
import NewTableRow from "./component/NewTableRow";

export default function App() {
  const [row, setRow] = useState(3);
  const [list, setList] = useState([]);
  const [newLine, setNewLine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddding, setIsAddding] = useState(false);

  let url = "https://jsonplaceholder.typicode.com/todos";
  let time, tempData;
  if (list) tempData = [...list];
  let item={...}
  if (newLine.length) tempData=[...tempData,...newLine];
  console.log(tempData);

  useEffect(() => {
    fetch(`${url}?_start=0&_end=3`)
      .then((response) => response.json())
      .then((result) => {
        setList(result);
        setIsLoading(false);
      });
  }, [url]);

  useEffect(() => {
    if (isAddding) {
      fetch(`${url}/${row}`)
        .then((response) => response.json())
        .then((result) => {
          setNewLine(result);
          setIsLoading(false);
          setIsAddding(false);
        });
    } 
  }, [url, row, isAddding]);

  function deleteRow(id) {
    let index = tempData.findIndex((e) => e.id === id);
    tempData.splice(index, 1);
    if (!tempData.length) setRow(3);
    setList(tempData);
  }

  return (
    <div className="App">
      <h1>Danh sách lý do từ chối đăng ký TKDT</h1>
      <h2>***</h2>
      {isLoading && !tempData.length ? (
        <div className="App-loading">Loading...</div>
      ) : (
        <Container>
          <Button
            color="primary"
            variant="contained"
            className="App-add-btn"
            onClick={() => {
              setRow((row) => row + 1);
              setIsLoading(true);
              setIsAddding(true);
            }}
          >
            Thêm mới
          </Button>
          <table>
            <thead>
              <tr>
                <th className="App-No">STT</th>
                <th>Lý do từ chối</th>
                <th className="App-time">Thời gian</th>
                <th className="App-user">Người cập nhật</th>
                <th>Xoá</th>
              </tr>
            </thead>
            <tbody>
              {tempData.map(({ id, title }) => (
                <NewTableRow
                  key={id}
                  number={id}
                  time={time}
                  reason={title}
                  deleteRow={deleteRow}
                />
              ))}
            </tbody>
          </table>
        </Container>
      )}
    </div>
  );
}


