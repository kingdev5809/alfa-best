import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import i18next from "i18next";
import translation_uz from "./Service/i18next/translations/uz/translation.json";
import translation_ru from "./Service/i18next/translations/ru/translation.json";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "ru",
  resources: {
    ru: {
      translation: translation_ru,
    },
    uz: {
      translation: translation_uz,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);
