import React, { useState } from "react";
import moment from "moment";

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

  return (
    <article className="form-calculator">
      <button className="button-remove" onClick={onClickRemove}>
        X
      </button>
      <label>
        생년월일
        <input
          type="date"
          name="dateBirth"
          value={dateBirth}
          onChange={onChangeDate}
        />
      </label>
      <label>
        기준날짜
        <input
          type="date"
          name="dateAnchor"
          value={dateAnchor}
          onChange={onChangeDate}
        />
      </label>
      <p>
        만나이(국제나이) : <span>{ageInternational}</span>세
      </p>
      <p>
        세는나이(한국나이) : <span>{ageKorean}</span>세
      </p>
    </article>
  );
};
