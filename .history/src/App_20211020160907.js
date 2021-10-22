import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Container from "muicss/lib/react/container";
import NewTableRow from "./component/NewTableRow";

export default function App() {
  const [row, setRow] = useState(2);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddding, setIsAddding] = useState(false);

  let url = "https://jsonplaceholder.typicode.com/todos";
  let tempData;
  if (list) tempData = [...list];
  let date= new Date();
  let time = date.toLocaleTimeString('vi-VN')

  useEffect(() => {
    fetch(`${url}?_start=0&_end=2`)
      .then((response) => response.json())
      .then((result) => {
        result = result.map(obj => ({...obj}))
        setList(result);
        setIsLoading(false);
        console.log(time);
      });
  }, [url,time]);

  useEffect(() => {
    if (isAddding) {
      fetch(`${url}/${row}`)
        .then((response) => response.json())
        .then((result) => {
          setIsLoading(false);
          setIsAddding(false);
          list.push(result);
          console.log(time);
        });
    }
  }, [url, row, isAddding, list, time]);

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
      {isLoading && !tempData.length ? (
        <div className="App-loading">Loading...</div>
      ) : (
        <Container>
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
              {tempData.map(({ id, title, timeStamp }) => (
                <NewTableRow
                  key={id}
                  number={id}
                  time={timeStamp}
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
