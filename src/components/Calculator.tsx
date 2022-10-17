import React, { useState } from "react";
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
      {/* <button className="button-remove" onClick={onClickRemove}>
        X
      </button> */}
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
        {isNaN(ageInternational) || ageInternational < 0 ? (
          <span>올바른 날짜를 입력해주세요.</span>
        ) : (
          <span>
            {ageInternational}
            {t("old")}
          </span>
        )}
      </p>
      <p>
        {t("ageYear")} :{" "}
        {!ageKorean || ageKorean - 1 < 0 ? (
          <span>올바른 날짜를 입력해주세요.</span>
        ) : (
          <span>
            {ageKorean - 1}
            {t("old")}
          </span>
        )}
      </p>
      <p>
        {t("ageKorean")} :{" "}
        {!ageKorean || ageKorean < 0 ? (
          <span>올바른 날짜를 입력해주세요.</span>
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
