import { Link } from "react-router-dom";
import { COMPANY, ROUTES, SERVICES } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img src="/logo-mark.svg" alt="" aria-hidden="true" />
              <span className="brand-text">
                <span className="brand-name">{COMPANY.name}</span>
                <span className="brand-sub">{COMPANY.tagline}</span>
              </span>
            </Link>
            <p className="footer-desc">{COMPANY.description}</p>
          </div>

          <div className="footer-col">
            <div className="footer-col-head">Company</div>
            <Link to="/">Home</Link>
            {ROUTES.map((r) => (
              <Link key={r.href} to={r.href}>
                {r.label}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <div className="footer-col-head">Capabilities</div>
            {SERVICES.map((s) => (
              <Link key={s.id} to="/services">
                {s.title}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <div className="footer-col-head">Contact</div>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            {COMPANY.phones.map((p) => (
              <a key={p} href={`tel:${p}`}>
                {p}
              </a>
            ))}
            {COMPANY.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <a href={COMPANY.url}>{`www.${COMPANY.domain}`}</a>
          </div>
        </div>

        <div className="footer-mark serif" aria-hidden="true">
          {COMPANY.name.toUpperCase()}
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </span>
          <span className="mono" style={{ letterSpacing: "0.1em" }}>
            Addis Ababa · East Africa
          </span>
        </div>
      </div>
    </footer>
  );
}
