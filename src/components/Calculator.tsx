import React from "react";
import { useTranslation } from "react-i18next";
import { Paper, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export const Calculator = ({
  dateBirth,
  dateAnchor,
  ageInternational,
  ageKorean,
  onClickRemove,
  onChangeDate,
}: {
  dateBirth: string;
  dateAnchor: string;
  ageInternational: number;
  ageKorean: number;
  onClickRemove: () => void;
  onChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { t: translate } = useTranslation();

  const isWrongDate = () => {
    const [yearBirth, monthBirth, dayBirth] = dateBirth.split("-").map(Number);
    const [yearAnchor, monthAnchor, dayAnchor] = dateAnchor
      .split("-")
      .map(Number);

    if (yearBirth > yearAnchor) return true;
    else if (yearBirth === yearAnchor && monthBirth > monthAnchor) return true;
    else if (
      yearBirth === yearAnchor &&
      monthBirth === monthAnchor &&
      dayBirth > dayAnchor
    )
      return true;
    return false;
  };

  return (
    <Paper
      elevation={5}
      style={{ borderRadius: 10 }}
      className="form-calculator"
    >
      <IconButton
        aria-label="delete"
        onClick={onClickRemove}
        sx={{ position: "absolute", top: 1, right: 1 }}
      >
        <Delete fontSize="inherit" />
      </IconButton>
      <label>
        {translate("dateBirth")}
        <input
          type="date"
          name="dateBirth"
          value={dateBirth}
          onChange={onChangeDate}
        />
      </label>
      <label>
        {translate("dateAnchor")}
        <input
          type="date"
          name="dateAnchor"
          value={dateAnchor}
          onChange={onChangeDate}
        />
      </label>
      <p>
        {translate("ageInternational")} :{" "}
        {isWrongDate() ? (
          <span>{translate("wrongDate")}</span>
        ) : (
          <span>
            {ageInternational}
            {translate("old")}
          </span>
        )}
      </p>
      <p>
        {translate("ageYear")} :{" "}
        {isWrongDate() ? (
          <span>{translate("wrongDate")}</span>
        ) : (
          <span>
            {ageKorean - 1}
            {translate("old")}
          </span>
        )}
      </p>
      <p>
        {translate("ageKorean")} :{" "}
        {isWrongDate() ? (
          <span>{translate("wrongDate")}</span>
        ) : (
          <span>
            {ageKorean}
            {translate("old")}
          </span>
        )}
      </p>
    </Paper>
  );
};
