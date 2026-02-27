import React, { createContext, useContext, useState, useEffect } from "react";
import { translateText } from "../utils/translator";

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = useState(
    localStorage.getItem("preferred_lang") || "ur",
  );

  useEffect(() => {
    localStorage.setItem("preferred_lang", lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ur" ? "rtl" : "ltr");
  }, [lang]);

  const t = async (text) => {
    if (lang === "en") return text;
    return await translateText(text, lang);
  };

  return (
    <TranslationContext.Provider value={{ t, lang, setLang }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const T = ({ children }) => {
  const { t, lang } = useTranslation();
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(lang !== "en");

  useEffect(() => {
    if (typeof children === "string") {
      if (lang === "en") {
        setTranslated(children);
        setLoading(false);
      } else {
        setLoading(true);
        t(children).then((res) => {
          setTranslated(res);
          setLoading(false);
        });
      }
    }
  }, [children, t, lang]);

  if (typeof children !== "string") return children;

  if (loading && lang !== "en") {
    return (
      <span
        className="skeleton-text"
        style={{ width: `${children.length * 8}px`, maxWidth: "100%" }}
      ></span>
    );
  }

  return <>{translated || children}</>;
};
