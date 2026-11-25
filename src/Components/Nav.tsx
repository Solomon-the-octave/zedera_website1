import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { COMPANY, ROUTES } from "../data/site";
import { usePrefs } from "../i18n/context";
import { Logo } from "./Logo";
import { ArrowRight, ScrollProgress } from "./ui";

const Sun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
const Moon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </svg>
);
const Globe = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);

function Toggles() {
  const { lang, setLang, theme, setTheme, t } = usePrefs();
  const other = lang === "en" ? "am" : "en";
  return (
    <div className="toggles">
      <button
        type="button"
        className="tgl tgl-lang"
        onClick={() => setLang(other)}
        aria-label={t.nav.switchLang}
        title={t.nav.switchLang}
        lang={other}
      >
        <Globe />
        <span className="tgl-full">{other === "am" ? "አማርኛ" : "English"}</span>
        <span className="tgl-short">{other === "am" ? "አማ" : "EN"}</span>
      </button>
      <button
        type="button"
        className="tgl tgl-theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={theme === "dark" ? t.nav.themeToLight : t.nav.themeToDark}
        title={theme === "dark" ? t.nav.themeToLight : t.nav.themeToDark}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = usePrefs();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.nav.skip}
      </a>
      <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
        <div className="nav-pill">
          <Link to="/" className="nav-brand" aria-label={`${COMPANY.legalName} ${t.nav.home}`}>
            <Logo variant="color" />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {ROUTES.map((r) => (
              <NavLink
                key={r.href}
                to={r.href}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              >
                {t.nav[r.key]}
              </NavLink>
            ))}
          </nav>

          <Toggles />

          <Link to="/contact" className="btn btn-primary btn-sm nav-cta">
            {t.nav.start} <ArrowRight size={14} />
          </Link>

          <button
            className={`burger${open ? " open" : ""}`}
            aria-label={open ? t.nav.close : t.nav.open}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
          <ScrollProgress />
        </div>
      </header>

      <div id="mobile-menu" className={`drawer${open ? " open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {ROUTES.map((r) => (
            <NavLink
              key={r.href}
              to={r.href}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              tabIndex={open ? 0 : -1}
            >
              {t.nav[r.key]}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn-primary" tabIndex={open ? 0 : -1}>
          {t.nav.start} <ArrowRight />
        </Link>
      </div>
    </>
  );
}
