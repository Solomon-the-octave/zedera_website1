import { createContext, useContext } from "react";
import en from "./en";
import type { Dict } from "./en";

export type Lang = "en" | "am";
export type Theme = "light" | "dark";

export type Prefs = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  theme: Theme;
  setTheme: (t: Theme) => void;
};

export const PrefsContext = createContext<Prefs>({
  lang: "en",
  setLang: () => {},
  t: en,
  theme: "light",
  setTheme: () => {},
});

/** Current language dictionary, language and theme controls. */
export const usePrefs = () => useContext(PrefsContext);

/** Shorthand for the current dictionary. */
export const useT = () => useContext(PrefsContext).t;

export function readStored<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
  try {
    const v = window.localStorage.getItem(key);
    return v && (allowed as readonly string[]).includes(v) ? (v as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStored(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage unavailable: preference lasts for this visit only */
  }
}
