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
  const { t } = useTranslation();

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
        {t("dateBirth")}
        <input
          type="date"
          name="dateBirth"
          value={dateBirth}
          onChange={onChangeDate}
        />
      </label>
      <label>
        {t("dateAnchor")}
        <input
          type="date"
          name="dateAnchor"
          value={dateAnchor}
          onChange={onChangeDate}
        />
      </label>
      <p>
        {t("ageInternational")} :{" "}
        {isWrongDate() ? (
          <span>{t("wrongDate")}</span>
        ) : (
          <span>
            {ageInternational}
            {t("old")}
          </span>
        )}
      </p>
      <p>
        {t("ageYear")} :{" "}
        {isWrongDate() ? (
          <span>{t("wrongDate")}</span>
        ) : (
          <span>
            {ageKorean - 1}
            {t("old")}
          </span>
        )}
      </p>
      <p>
        {t("ageKorean")} :{" "}
        {isWrongDate() ? (
          <span>{t("wrongDate")}</span>
        ) : (
          <span>
            {ageKorean}
            {t("old")}
          </span>
        )}
      </p>
    </Paper>
  );
};
