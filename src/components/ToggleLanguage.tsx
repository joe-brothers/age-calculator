import * as React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import i18next from "i18next";

export const ToggleLanguage = () => {
  const [alignment, setAlignment] = React.useState("kr");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    i18next.changeLanguage(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="language"
    >
      <ToggleButton value="kr" aria-label="korean">
        🇰🇷
      </ToggleButton>
      <ToggleButton value="en" aria-label="english">
        🇺🇸
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
