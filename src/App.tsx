import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Stack } from "@mui/material";
import { Calculator } from "./components/Calculator";
import { ToggleLanguage } from "./components/ToggleLanguage";
import logoImageUrl from "./assets/logo.png";
import "./App.css";
import {
  FacebookShareButton,
  LineShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  LineIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const URL = "https://joe-brothers.com/age-calculator/";

function App() {
  const { t: translate } = useTranslation();

  const [nextId, setNextId] = useState(1);
  const [data, setData] = useState([
    {
      id: 0,
    },
  ]);

  const onClickAdd = () => {
    setData([...data, { id: nextId }]);
    setNextId(nextId + 1);
  };

  const onClickRemove = (id: number) => {
    if (data.length === 1) {
      return;
    }
    setData(data.filter((val) => val.id !== id));
  };

  return (
    <div className="App">
      <ToggleLanguage />
      <h2>{translate("title")}</h2>
      <section className="container-calculators">
        {data.map(({ id }) => (
          <Calculator
            key={`calculator_${id}`}
            onClickRemove={() => onClickRemove(id)}
          />
        ))}
      </section>
      <Button
        variant="contained"
        size="small"
        style={{ marginTop: 20 }}
        onClick={onClickAdd}
      >
        {translate("add")}
      </Button>
      <Stack direction="row" spacing={1} justifyContent="center">
        <TwitterShareButton url={URL}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton url={URL}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <LineShareButton url={URL}>
          <LineIcon size={32} round={true} />
        </LineShareButton>
        <WhatsappShareButton url={URL}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <TelegramShareButton url={URL}>
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
      </Stack>
      <p className="made-by">
        Made by <img className="logo" src={logoImageUrl} />
        <a href="https://joe-brothers.com/" target="_blank">
          Joe Brothers, Inc.
        </a>
      </p>
    </div>
  );
}

export default App;
