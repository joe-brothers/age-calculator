import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      title: "Korean/International Age Calculator",
      dateBirth: "Date of Birth",
      dateAnchor: "Anchor Date",
      ageInternational: "International Age",
      ageYear: "Age in year",
      ageKorean: "Korean Age",
      add: "Add",
      old: " years old",
    },
  },
  kr: {
    translation: {
      title: "만나이/연나이/세는나이 (국제나이/한국나이) 계산기",
      dateBirth: "생년월일",
      dateAnchor: "기준날짜",
      ageInternational: "만나이(국제나이)",
      ageYear: "연나이",
      ageKorean: "세는나이(한국나이)",
      add: "추가",
      old: "세",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
