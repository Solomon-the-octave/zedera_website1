import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { COMPANY, ROUTES, DARK_TOP_ROUTES } from "../data/site";
import { ScrollProgress } from "./ui";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const darkTop = DARK_TOP_ROUTES.includes(pathname);
  const transparent = darkTop && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      <header className={`nav ${transparent ? "transparent" : "solid"}`}>
        <div className="wrap nav-inner">
          <Link to="/" className="brand" aria-label={`${COMPANY.legalName} home`}>
            <img src="/logo-mark.svg" alt="" aria-hidden="true" />
            <span className="brand-text">
              <span className="brand-name">{COMPANY.name}</span>
              <span className="brand-sub">{COMPANY.tagline}</span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {ROUTES.map((r) => (
              <NavLink
                key={r.href}
                to={r.href}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              >
                {r.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className={`btn nav-cta ${transparent ? "btn-ghost" : "btn-primary"}`}
          >
            Start a project
          </Link>

          <button
            className={`burger${open ? " open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ScrollProgress />
      </header>

      <div className={`drawer${open ? " open" : ""}`} aria-hidden={!open}>
        {ROUTES.map((r) => (
          <NavLink
            key={r.href}
            to={r.href}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            tabIndex={open ? 0 : -1}
          >
            {r.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-primary" tabIndex={open ? 0 : -1}>
          Start a project
        </Link>
      </div>
    </>
  );
}
