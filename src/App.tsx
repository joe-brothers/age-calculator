import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Stack, Typography } from "@mui/material";
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
} from "next-share";
import {
  FacebookIcon,
  LineIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "next-share";

const SHARE_URL = "https://joe-brothers.com/age-calculator/";

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

  const onClickKakaoTalk = () => {
    window.Kakao.Link.createCustomButton({
      container: "#kakao-link-btn",
      templateId: 86175,
    });
  };

  return (
    <Stack spacing={2} p={2}>
      <ToggleLanguage />
      <h2>{translate("title")}</h2>
      <Stack spacing={2}>
        {data.map(({ id }) => (
          <Calculator
            key={`calculator_${id}`}
            onClickRemove={() => onClickRemove(id)}
          />
        ))}
      </Stack>
      <Button
        variant="contained"
        size="small"
        style={{ marginTop: 20 }}
        onClick={onClickAdd}
      >
        {translate("add")}
      </Button>
      <Stack direction="row" spacing={1} justifyContent="center">
        <TwitterShareButton url={SHARE_URL}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton url={SHARE_URL}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <LineShareButton url={SHARE_URL}>
          <LineIcon size={32} round={true} />
        </LineShareButton>
        <WhatsappShareButton url={SHARE_URL}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <TelegramShareButton url={SHARE_URL}>
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
        <button id="kakao-link-btn" onClick={onClickKakaoTalk}>
          share
        </button>
      </Stack>
      <Typography align="right">
        Made by <img className="logo" src={logoImageUrl} />
        <a href="https://joe-brothers.com/" target="_blank">
          Joe Brothers, Inc.
        </a>
      </Typography>
    </Stack>
  );
}

export default App;
