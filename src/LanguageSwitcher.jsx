// src/LanguageSwitcher.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  // Отримуємо функцію 't' для перекладу та функцію 'i18n' для управління мовою
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    // Визначаємо поточну мову і перемикаємо на іншу
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "uk" ? "en" : "uk";

    // Змінюємо мову
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button onClick={toggleLanguage}>
      {/* Текст на кнопці буде динамічно змінюватися залежно від поточної мови */}
      {t("language_toggle_button")}
    </button>
  );
};

export default LanguageSwitcher;
