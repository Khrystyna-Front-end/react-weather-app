// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // прив'язуємо react-i18next до екземпляра i18n
  .init({
    resources: {
      en: {
        translation: {
          language_toggle_button: "Switch to Ukrainian",
        },
      },
      uk: {
        translation: {
          language_toggle_button: "Перемкнутися на English",
        },
      },
    },
    lng: "uk", // Мова за замовчуванням при першому завантаженні
    fallbackLng: "en", // Резервна мова, якщо поточної немає
    interpolation: {
      escapeValue: false, // React вже захищає від XSS
    },
  });

export default i18n;
