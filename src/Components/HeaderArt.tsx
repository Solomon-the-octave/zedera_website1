import { useEffect, useState } from "react";
import { COMPANY, telHref, whatsappHref } from "../data/site";
import { useT } from "../i18n/context";
import { Mark } from "./Logo";
import { ServiceIcon } from "./ServiceArt";
import { Check } from "./ui";

/* Each inner page gets its own header illustration, so pages do not open
   the same way. All are decorative except ContactArt, which is a real
   quick-contact card. */

/** Services: the six services as a tile grid. */
export function ServicesArt() {
  const t = useT();
  return (
    <div className="ha ha-services" aria-hidden="true">
      {t.services.map((s, i) => (
        <div className="ha-tile on-dark" key={s.id} style={{ animationDelay: `${i * 0.5}s` }}>
          <span className="ha-tile-icon">
            <ServiceIcon id={s.id} size={20} />
          </span>
          <span className="ha-tile-label">{s.title}</span>
        </div>
      ))}
    </div>
  );
}

/** Solutions: sector chips that cycle, with what we would build for the active one. */
export function SolutionsArt() {
  const t = useT();
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setI((v) => (v + 1) % t.solutions.length), 2600);
    return () => window.clearInterval(id);
  }, [t.solutions.length]);
  const s = t.solutions[i];
  return (
    <div className="ha ha-solutions on-dark" aria-hidden="true">
      <div className="ha-chips">
        {t.solutions.map((x, k) => (
          <span key={x.id} className={`ha-chip${k === i ? " active" : ""}`}>
            {x.name}
          </span>
        ))}
      </div>
      <div className="ha-sol-panel" key={s.id}>
        <span className="sx-kicker">{s.name}</span>
        <strong>{s.headline}</strong>
        <div className="ha-sol-builds">
          {s.builds.map((b) => (
            <span key={b}>
              <Check size={12} /> {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Process: the five stages as a track with the build stage in progress. */
export function ProcessArt() {
  const t = useT();
  return (
    <div className="ha ha-process on-dark" aria-hidden="true">
      <div className="ha-track">
        {t.stages.map((s, k) => (
          <div key={s.num} className={`ha-stage${k < 2 ? " done" : k === 2 ? " now" : ""}`}>
            <span className="ha-node">{k < 2 ? <Check size={12} /> : s.num}</span>
            <span className="ha-stage-title">{s.title}</span>
            <span className="ha-stage-time">{s.duration}</span>
          </div>
        ))}
      </div>
      <div className="ha-progress">
        <span />
      </div>
      <div className="ha-update">
        <span className="hv-avatar">Z</span>
        <div>
          <strong>{t.stages[2].outputs[1]}</strong>
          <small>{t.stages[2].outputs[0]}</small>
        </div>
      </div>
    </div>
  );
}

/** About: the mark, large, with two small fact cards. */
export function AboutArt() {
  const t = useT();
  return (
    <div className="ha ha-about" aria-hidden="true">
      <div className="ha-mark on-dark">
        <Mark size={150} variant="color" />
      </div>
      <div className="ha-fact ha-fact-a">
        <span className="ha-fact-dot" />
        {t.company.location}
      </div>
      <div className="ha-fact ha-fact-b">
        <Check size={12} /> {t.principles[0].title}
      </div>
    </div>
  );
}

/** Contact: a real quick-contact card. */
export function ContactArt() {
  const t = useT();
  const pg = t.pages.contact;
  return (
    <div className="ha ha-contact on-dark">
      <div className="ha-contact-head">
        <Mark size={28} variant="color" />
        <div>
          <strong>{COMPANY.legalName}</strong>
          <small>{pg.hours}</small>
        </div>
      </div>
      <a className="ha-contact-row wa" href={whatsappHref(t.common.whatsappText)} target="_blank" rel="noreferrer">
        <span>{pg.whatsapp}</span>
        <b>{pg.whatsappVal}</b>
      </a>
      <a className="ha-contact-row" href={`mailto:${COMPANY.email}`}>
        <span>{pg.email}</span>
        <b>{COMPANY.email}</b>
      </a>
      <a className="ha-contact-row" href={telHref(COMPANY.phones[0])}>
        <span>{pg.phone}</span>
        <b>{COMPANY.phones[0]}</b>
      </a>
    </div>
  );
}
