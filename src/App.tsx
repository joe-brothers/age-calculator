import React, { useState } from "react";
import { Calculator } from "./components/Calculator";
import moment from "moment";
import "./App.css";

function App() {
  const dateDefault = {
    dateBirth: "1990-01-01",
    dateAnchor: moment(new Date()).format("YYYY-MM-DD"),
  };
  const [nextId, setNextId] = useState(1);
  const [data, setData] = useState([
    {
      id: 0,
      ...dateDefault,
    },
  ]);

  const onClickAdd = () => {
    setData([...data, { id: nextId, ...dateDefault }]);
    setNextId(nextId + 1);
  };

  const onClickRemove = (id: number) => {
    if (data.length === 1) {
      return;
    }
    setData(data.filter((val) => val.id !== id));
  };

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    let newData = data.map((val) => {
      if (val.id === id) {
        return {
          ...val,
          [e.target.name]: moment(new Date(e.target.value)).format(
            "YYYY-MM-DD"
          ),
        };
      }
      return val;
    });
    setData(newData);
  };

  const calculateAgeInternational = ({
    dateBirth,
    dateAnchor,
  }: {
    dateBirth: string;
    dateAnchor: string;
  }) => {
    const [yearBirth, monthBirth, dayBirth] = dateBirth.split("-").map(Number);
    const [yearAnchor, monthAnchor, dayAnchor] = dateAnchor
      .split("-")
      .map(Number);

    let ifPassedBirthday: boolean =
      monthAnchor > monthBirth ||
      (monthAnchor == monthBirth && dayAnchor >= dayBirth);
    let age = yearAnchor - yearBirth - 1 + Number(ifPassedBirthday);
    return age;
  };
  const calculateAgeKorean = ({
    dateBirth,
    dateAnchor,
  }: {
    dateBirth: string;
    dateAnchor: string;
  }) => {
    return (
      Number(dateAnchor.split("-")[0]) - Number(dateBirth.split("-")[0]) + 1
    );
  };

  return (
    <div className="App">
      <h2>만나이/연나이/세는나이 (국제나이/한국나이) 계산기</h2>
      <section className="container-calculators">
        {data.map(({ id, dateBirth, dateAnchor }) => (
          <Calculator
            key={`calculator_${id}`}
            dateBirth={dateBirth}
            dateAnchor={dateAnchor}
            ageInternational={calculateAgeInternational({
              dateBirth,
              dateAnchor,
            })}
            ageKorean={calculateAgeKorean({ dateBirth, dateAnchor })}
            onClickRemove={() => onClickRemove(id)}
            onChangeDate={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeDate(e, id)
            }
          />
        ))}
      </section>
      <button className="button-add" onClick={onClickAdd}>
        추가
      </button>
      <p className="made-by">
        Made by <img className="logo" src="src/assets/logo.png" />
        <a href="https://joe-brothers.com/" target="_blank">
          Joe Brothers, Inc.
        </a>
      </p>
    </div>
  );
}

export default App;
