import { Link } from "react-router-dom";
import Seo from "../Components/Seo";
import PageHeader from "../Components/PageHeader";
import { ServicesArt } from "../Components/HeaderArt";
import CTABand from "../Components/CTABand";
import { ServiceIcon, ServicePreview } from "../Components/ServiceArt";
import { ArrowRight, Check, Reveal, SectionHead } from "../Components/ui";
import { useT } from "../i18n/context";

export default function Services() {
  const t = useT();
  const pg = t.pages.services;
  return (
    <>
      <Seo title={t.seo.services.title} description={t.seo.services.description} />

      <PageHeader crumb={pg.crumb} eyebrow={pg.eyebrow} title={pg.title} accent={pg.accent} lede={pg.lede}
        art={<ServicesArt />}>
        <div className="jump">
          {t.services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="jump-chip">
              <ServiceIcon id={s.id} size={16} />
              {s.title}
            </a>
          ))}
        </div>
      </PageHeader>

      <section className="section">
        <div className="wrap svc-list">
          {t.services.map((s, i) => (
            <Reveal key={s.id}>
              <article id={s.id} className={`svc-row${i % 2 ? " flip" : ""}`}>
                <div className="svc-row-copy">
                  <span className="icon-tile icon-tile-lg">
                    <ServiceIcon id={s.id} size={24} />
                  </span>
                  <h2 className="h3">{s.title}</h2>
                  <p className="lede">{s.summary}</p>
                  <p className="body">{s.detail}</p>
                  <ul className="check-list two">
                    {s.includes.map((x) => (
                      <li key={x}>
                        <span className="check-icon">
                          <Check size={12} />
                        </span>
                        {x}
                      </li>
                    ))}
                  </ul>
                  <p className="svc-typical">
                    <span>{t.common.typicalProjects}</span>
                    {s.typical}
                  </p>
                </div>
                <div className="svc-row-art">
                  <ServicePreview id={s.id} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <Reveal>
            <SectionHead center eyebrow={pg.engEyebrow} title={pg.engTitle} accent={pg.engAccent} />
          </Reveal>
          <div className="eng-grid">
            {t.engagements.map((e, i) => (
              <Reveal key={e.title} delay={i * 70}>
                <div className="eng-card">
                  <h3 className="h4">{e.title}</h3>
                  <dl>
                    <dt>{t.common.bestFor}</dt>
                    <dd>{e.bestFor}</dd>
                    <dt>{t.common.terms}</dt>
                    <dd>{e.terms}</dd>
                  </dl>
                  <Link to="/contact" className="link-arrow">
                    {t.common.askAbout} <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap faq-wrap">
          <Reveal>
            <SectionHead eyebrow={pg.faqEyebrow} title={pg.faqTitle} accent={pg.faqAccent} />
          </Reveal>
          <div className="faq">
            {t.faq.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>
                  {f.q}
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <p className="body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
