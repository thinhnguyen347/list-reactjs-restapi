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
  const [addedItem, setAddedItem] = useState([]);

  let url = "https://jsonplaceholder.typicode.com/todos";
  let tempData;
  if (list) tempData = [...list];
  if (addedItem) {
    let newItem = [];
    if (newItem) {
      newItem = [...newItem, ...addedItem];
      tempData.push(newItem);
    }
  }
  //let date= new Date();
  //let time = `${new Date.toLocaleTimeString('vi-VN')} - ${new Date.toLocaleDateString('vi-VN')}`;

  useEffect(() => {
    fetch(`${url}?_start=0&_end=2`)
      .then((response) => response.json())
      .then((result) => {
        let time = `${new Date().toLocaleTimeString(
          "vi-VN"
        )} - ${new Date().toLocaleDateString("vi-VN")}`;
        result = result.map((obj) => ({
          ...obj,
          timeStamp: time,
        }));
        setList(result);
        setIsLoading(false);
        console.log(result);
      });
  }, [url]);

  useEffect(() => {
    if (isAddding) {
      fetch(`${url}/${row}`)
        .then((response) => response.json())
        .then((result) => {
          let time = `${new Date().toLocaleTimeString(
            "vi-VN"
          )} - ${new Date().toLocaleDateString("vi-VN")}`;

          result = { ...result, timeStamp: time };
          setAddedItem(result);
          setIsLoading(false);
          setIsAddding(false);
          console.log(result);
        });
    }
  }, [url, row, isAddding, list]);

  function deleteRow(id) {
    let index = tempData.findIndex((e) => e.id === id);
    tempData.splice(index, 1);
    if (!tempData.length) setRow(3);
    setList(tempData);
  }

  return (
    <div className="App">
      <h1>Danh s??ch l?? do t??? ch???i ????ng k?? TKDT</h1>
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
        Th??m m???i
      </Button>
      {isLoading && !tempData.length ? (
        <div className="App-loading">Loading...</div>
      ) : (
        <Container>
          <table>
            <thead>
              <tr>
                <th className="App-No">STT</th>
                <th>L?? do t??? ch???i</th>
                <th className="App-time">Th???i gian</th>
                <th className="App-user">Ng?????i c???p nh???t</th>
                <th>Xo??</th>
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
