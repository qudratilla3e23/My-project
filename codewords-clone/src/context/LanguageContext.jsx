import { createContext, useContext, useState } from "react";
import { translations } from "../i18n/translations.js";

const LanguageContext = createContext(null);

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem("cw-lang") || "en";
}

function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = (code) => {
    setLangState(code);
    window.localStorage.setItem("cw-lang", code);
  };

  const t = (path) => {
    const dict = translations[lang] || translations.en;
    return getPath(dict, path) ?? getPath(translations.en, path) ?? path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
