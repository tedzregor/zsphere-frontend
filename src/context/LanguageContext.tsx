"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  translations,
  Language,
} from "@/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] =
    useState<Language>("EN");

  useEffect(() => {
    const savedLanguage =
      localStorage.getItem("language") as Language | null;

    if (
      savedLanguage &&
      translations[savedLanguage]
    ) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);

    localStorage.setItem(
      "language",
      newLanguage
    );
  };

  const t = (key: string): string => {
    const keys = key.split(".");

    let value: unknown = translations[language];

    for (const k of keys) {
      if (
        typeof value === "object" &&
        value !== null &&
        k in value
      ) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === "string"
      ? value
      : key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}
