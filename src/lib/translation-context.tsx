"use client";

import React, { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { translations } from "./language";


type Lang = "fr" | "en";

interface TranslationContextType {
  language: Lang;
  setLanguage: (lang: Lang) => void;
  t: (key: keyof typeof translations[Lang]) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Lang>("fr");

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: (key: keyof typeof translations[Lang]) => translations[language]?.[key] ?? key,
  }), [language]);

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error("useTranslation must be used within a TranslationProvider");
  return context;
};

