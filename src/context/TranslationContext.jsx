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
  const [lang, setLang] = useState("ur"); // Default to Urdu as requested

  const t = async (text) => {
    return await translateText(text, lang);
  };

  return (
    <TranslationContext.Provider value={{ t, lang, setLang }}>
      {children}
    </TranslationContext.Provider>
  );
};

/**
 * A component that wraps text and translates it automatically.
 */
export const T = ({ children }) => {
  const { t } = useTranslation();
  const [translated, setTranslated] = useState(
    typeof children === "string" ? "" : children,
  );

  useEffect(() => {
    if (typeof children === "string") {
      t(children).then(setTranslated);
    }
  }, [children, t]);

  if (typeof children !== "string") return children;

  return <>{translated || children}</>;
};
