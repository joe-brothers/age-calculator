import * as React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import i18next from "i18next";

export const ToggleLanguage = () => {
  const [selected, setSelected] = React.useState(i18next.language);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    selected: string
  ) => {
    setSelected(selected);
    i18next.changeLanguage(selected);
  };

  return (
    <ToggleButtonGroup
      value={selected}
      exclusive
      onChange={handleChange}
      aria-label="language"
    >
      <ToggleButton value="ko-KR" aria-label="korean">
        🇰🇷
      </ToggleButton>
      <ToggleButton value="en-US" aria-label="english">
        🇺🇸
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
