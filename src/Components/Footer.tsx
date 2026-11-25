import { Link } from "react-router-dom";
import { COMPANY, ROUTES, telHref, whatsappHref } from "../data/site";
import { useT } from "../i18n/context";
import { Logo } from "./Logo";

export default function Footer() {
  const t = useT();
  return (
    <footer className="footer on-dark">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" aria-label={`${COMPANY.legalName} ${t.nav.home}`}>
              <Logo variant="color" />
            </Link>
            <p className="footer-desc">{t.company.description}</p>
            <div className="footer-social">
              <a href={COMPANY.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={whatsappHref(t.common.whatsappText)} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-head">{t.footer.company}</div>
            <Link to="/">{t.common.home}</Link>
            {ROUTES.map((r) => (
              <Link key={r.href} to={r.href}>
                {t.nav[r.key]}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <div className="footer-head">{t.footer.services}</div>
            {t.services.map((s) => (
              <Link key={s.id} to={`/services#${s.id}`}>
                {s.title}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <div className="footer-head">{t.footer.contact}</div>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            {COMPANY.phones.map((p) => (
              <a key={p} href={telHref(p)}>
                {p}
              </a>
            ))}
            {t.company.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {COMPANY.legalName}. {t.footer.rights}
          </span>
          <span>{t.company.location}</span>
        </div>
      </div>
    </footer>
  );
}
