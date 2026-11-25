import Seo from "../Components/Seo";
import PageHeader from "../Components/PageHeader";
import { ProcessArt } from "../Components/HeaderArt";
import CTABand from "../Components/CTABand";
import { Check, Reveal, SectionHead } from "../Components/ui";
import { useT } from "../i18n/context";

export default function Process() {
  const t = useT();
  const pg = t.pages.process;
  return (
    <>
      <Seo title={t.seo.process.title} description={t.seo.process.description} />

      <PageHeader crumb={pg.crumb} eyebrow={pg.eyebrow} title={pg.title} accent={pg.accent} lede={pg.lede}
        art={<ProcessArt />} />

      <section className="section">
        <div className="wrap timeline">
          {t.stages.map((s) => (
            <Reveal key={s.num}>
              <article className="tl-item">
                <div className="tl-marker">
                  <span>{s.num}</span>
                </div>
                <div className="tl-card">
                  <div className="tl-head">
                    <h2 className="h3">{s.title}</h2>
                    <span className="step-time">{s.duration}</span>
                  </div>
                  <p className="body">{s.body}</p>
                  <div className="tl-outputs">
                    <span className="tl-label">{t.common.youReceive}</span>
                    {s.outputs.map((o) => (
                      <span key={o} className="pill">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <Reveal>
            <SectionHead center eyebrow={pg.stdEyebrow} title={pg.stdTitle} accent={pg.stdAccent} />
          </Reveal>
          <Reveal>
            <ul className="std-grid">
              {t.standards.map((s) => (
                <li key={s}>
                  <span className="check-icon">
                    <Check size={12} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
