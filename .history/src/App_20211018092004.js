import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Button from "muicss/lib/react/button";
import Container from "muicss/lib/react/container";
import NewTableRow from "./component/NewTableRow";

export default function App() {
  const [row, setRow] = useState(3);
  const [list, setList] = useState([]);
  const [newLine, setNewLine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let url = "https://jsonplaceholder.typicode.com/todos";
  let time,
    tempData = [...list];

    if (newLine.length) tempData.push({...newLine})

  useEffect(() => {
    fetch(`${url}?_start=0&_end=3`)
      .then((response) => response.json())
      .then((result) => {
        time = new Date().toLocaleTimeString("vi-VN");
        console.log("result1");
        setList(result);
        setIsLoading(false);
      });
  }, [url, row]);

  useEffect(() => {
    fetch(`${url}/${row}`)
      .then((response) => response.json())
      .then((result) => {
        time = new Date().toLocaleTimeString("vi-VN");
        console.log(result);
        setNewLine(result);
        setIsLoading(false);
      });
  }, [url, row]);

  function deleteRow(id) {
    let index = tempData.findIndex((e) => e.id === id);
    tempData.splice(index, 1);
    if (!tempData.length) {
      setRow(1);
    } else {
      setList(tempData);
    }
  }

  return (
    <div className="App">
      <h1>Danh sách lý do từ chối đăng ký TKDT</h1>
      <h2>***</h2>
      <Button
        color="primary"
        className="App-add-btn"
        onClick={() => {
          setRow((row) => row + 1);
          setIsLoading(false);
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
              {tempData.map(({ id, title }) => (
                <NewTableRow
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
