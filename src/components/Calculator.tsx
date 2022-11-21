import React from "react";
import { useTranslation } from "react-i18next";
import {
  Paper,
  IconButton,
  TextField,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, { Dayjs } from "dayjs";

export const Calculator = ({
  onClickRemove,
}: {
  onClickRemove: () => void;
}) => {
  const { t: translate } = useTranslation();

  const [dateBirth, setDateBirth] = React.useState<Dayjs | null>(
    dayjs("1990-01-01")
  );
  const [dateAnchor, setDateAnchor] = React.useState<Dayjs | null>(
    dayjs(new Date())
  );
  const onChangeDateBirth = (newValue: Dayjs | null) => {
    setDateBirth(newValue);
  };
  const onChangeDateAnchor = (newValue: Dayjs | null) => {
    setDateAnchor(newValue);
  };
  const onClickToday = () => {
    setDateAnchor(dayjs(new Date()));
  };

  const isWrongDate = (): Boolean => {
    return dayjs(dateAnchor).isBefore(dayjs(dateBirth));
  };
  const isBirthdayPassed = (): Boolean => {
    return !dayjs(dayjs(dateAnchor).format("MM/DD")).isBefore(
      dayjs(dateBirth).format("MM/DD")
    );
  };
  const isDateInvalid = (): Boolean => {
    return !(dayjs(dateAnchor).isValid() && dayjs(dateBirth).isValid());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper elevation={5} sx={{ position: "relative", borderRadius: 3, p: 2 }}>
        <IconButton
          aria-label="delete"
          onClick={onClickRemove}
          sx={{ position: "absolute", top: 1, right: 1 }}
        >
          <Delete fontSize="inherit" />
        </IconButton>
        <Stack spacing={1}>
          <div>
            <Typography>{translate("dateBirth")}</Typography>
            <DesktopDatePicker
              inputFormat="YYYY/MM/DD"
              value={dateBirth}
              onChange={onChangeDateBirth}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <div>
            <Typography>{translate("dateAnchor")}</Typography>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <DesktopDatePicker
                inputFormat="YYYY/MM/DD"
                value={dateAnchor}
                onChange={onChangeDateAnchor}
                renderInput={(params) => <TextField {...params} />}
              />
              <Button variant="outlined" onClick={onClickToday}>
                {translate("today")}
              </Button>
            </div>
          </div>
          <Typography>
            {translate("ageInternational")} :{" "}
            {isWrongDate() || isDateInvalid() ? (
              <span>{translate("wrongDate")}</span>
            ) : (
              <span>
                {Number(dayjs(dateAnchor).format("YYYY")) -
                  Number(dayjs(dateBirth).format("YYYY")) +
                  Number(isBirthdayPassed()) -
                  1}
                {translate("old")}
              </span>
            )}
          </Typography>
          <Typography>
            {translate("ageYear")} :{" "}
            {isWrongDate() || isDateInvalid() ? (
              <span>{translate("wrongDate")}</span>
            ) : (
              <span>
                {Number(dayjs(dateAnchor).format("YYYY")) -
                  Number(dayjs(dateBirth).format("YYYY"))}
                {translate("old")}
              </span>
            )}
          </Typography>
          <Typography>
            {translate("ageKorean")} :{" "}
            {isWrongDate() || isDateInvalid() ? (
              <span>{translate("wrongDate")}</span>
            ) : (
              <span>
                {Number(dayjs(dateAnchor).format("YYYY")) -
                  Number(dayjs(dateBirth).format("YYYY")) +
                  1}
                {translate("old")}
              </span>
            )}
          </Typography>
        </Stack>
      </Paper>
    </LocalizationProvider>
  );
};
