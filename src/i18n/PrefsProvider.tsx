import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import en from "./en";
import am from "./am";
import { PrefsContext, readStored, writeStored } from "./context";
import type { Lang, Theme } from "./context";

/**
 * Holds the visitor's language (English / Amharic) and theme (light / dark).
 * Both are remembered in localStorage and reflected on <html> as
 * lang="en|am" and data-theme="light|dark".
 */
export default function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readStored("zedera-lang", ["en", "am"] as const, "en"));
  const [theme, setThemeState] = useState<Theme>(() => {
    const fromDom = document.documentElement.dataset.theme;
    return fromDom === "dark" || fromDom === "light"
      ? fromDom
      : readStored("zedera-theme", ["light", "dark"] as const, "dark");
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    writeStored("zedera-lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#060b1f" : "#f6f6f1");
    writeStored("zedera-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      lang,
      setLang: setLangState,
      t: lang === "am" ? am : en,
      theme,
      setTheme: setThemeState,
    }),
    [lang, theme]
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}
