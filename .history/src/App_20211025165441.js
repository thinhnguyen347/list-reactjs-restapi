import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TableRow from "./component/TableRow";
import { nanoid } from "nanoid";

export default function App() {
  const [row, setRow] = useState(JSON.parse(locaStorage.getItem("row") || 1);
  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddding, setIsAddding] = useState(false);

  let url = "https://jsonplaceholder.typicode.com/todos";
  let tempData;
  if (list) {tempData = [...list]; localStorage.set("data", JSON.stringify(list))}

  useEffect(() => {
    fetch(`${url}/1`)
      .then((response) => response.json())
      .then((result) => {
        let time = `${new Date().toLocaleTimeString(
          "vi-VN"
        )} - ${new Date().toLocaleDateString("vi-VN")}`;
        result = [{ ...result, timeStamp: time }];
        setList(result);
        setIsLoading(false);
      });
  }, [url]);

  useEffect(() => {
    if (isAddding) {
      fetch(`${url}/${row}`)
        .then((response) => response.json())
        .then((result) => {
          localStorage.setItem("row", `${row}`)
          let time = `${new Date().toLocaleTimeString(
            "vi-VN"
          )} - ${new Date().toLocaleDateString("vi-VN")}`;
          result = { ...result, timeStamp: time };
          setList((list) => [...list, result]);
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
      {isLoading && !tempData?.length ? (
        <div className="App-loading">
          Loading ...
        </div>
      ) : (
        <table cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th className="App-No">STT</th>
              <th className="App-reason">Lý do nội&nbsp;bộ</th>
              <th className="App-time">Thời gian</th>
              <th className="App-user">Người cập&nbsp;nhật</th>
              <th>Xoá</th>
            </tr>
          </thead>
          <tbody>
            {tempData.map(({ id, title, timeStamp }) => (
              <TableRow
                key={nanoid()}
                number={id}
                time={timeStamp}
                reason={title}
                deleteRow={deleteRow}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
