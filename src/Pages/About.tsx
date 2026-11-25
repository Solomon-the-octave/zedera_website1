import Seo from "../Components/Seo";
import PageHeader from "../Components/PageHeader";
import { AboutArt } from "../Components/HeaderArt";
import CTABand from "../Components/CTABand";
import { Mark } from "../Components/Logo";
import { Reveal, SectionHead } from "../Components/ui";
import { useT } from "../i18n/context";

export default function About() {
  const t = useT();
  const pg = t.pages.about;
  return (
    <>
      <Seo title={t.seo.about.title} description={t.seo.about.description} />

      <PageHeader crumb={pg.crumb} eyebrow={pg.eyebrow} title={pg.title} accent={pg.accent} lede={pg.lede}
        art={<AboutArt />} />

      <section className="section">
        <div className="wrap about">
          <Reveal>
            <div className="about-copy">
              {pg.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "lede lede-lg" : "body"}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <aside className="about-card on-dark">
              <div className="about-mark">
                <Mark size={80} variant="color" />
              </div>
              <blockquote>“{pg.quote}”</blockquote>
              <span className="about-attr">{pg.quoteAttr}</span>
              <div className="about-meta">
                <div>
                  <span>{pg.basedIn}</span>
                  {t.company.address.join(", ")}
                </div>
                <div>
                  <span>{pg.workingWith}</span>
                  {pg.workingWithVal}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <Reveal>
            <SectionHead center eyebrow={pg.prEyebrow} title={pg.prTitle} accent={pg.prAccent} />
          </Reveal>
          <div className="why-cards four">
            {t.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="why-card">
                  <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="h4">{p.title}</h3>
                  <p className="body-sm">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
