"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import en from "./messages/en.json";
import pt from "./messages/pt.json";

type Locale = "en" | "pt";
type Dict = Record<string, string>;
const dictionaries: Record<Locale, Dict> = { en, pt };

type Ctx = {
  locale: Locale;
  t: (key: string, fallback?: string) => string;
  setLocale: (l: Locale) => void;
};

const I18nCtx = createContext<Ctx>({
  locale: "en",
  t: (k, fb) => fb ?? k,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(
    (typeof window !== "undefined" &&
      (localStorage.getItem("locale") as Locale)) ||
      (process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Locale) ||
      "en"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const dict = dictionaries[locale] || {};

  // Wrap t in useCallback so it's stable
  const t = useCallback(
    (key: string, fallback?: string) => {
      return dict[key] ?? fallback ?? key;
    },
    [dict]
  );

  // Include `t` so consumers see updated function when locale changes
  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  return useContext(I18nCtx);
}
