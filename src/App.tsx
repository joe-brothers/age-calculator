import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Stack, Typography } from "@mui/material";
import { Calculator } from "./components/Calculator";
import { ToggleLanguage } from "./components/ToggleLanguage";
import logoImageUrl from "./assets/logo.png";
import "./App.css";
import { ShareButtons } from "./components/ShareButtons";

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
      <ShareButtons />
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
