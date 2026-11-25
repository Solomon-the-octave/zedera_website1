import { Link } from "react-router-dom";
import Seo from "../Components/Seo";
import PageHeader from "../Components/PageHeader";
import { SolutionsArt } from "../Components/HeaderArt";
import CTABand from "../Components/CTABand";
import { ArrowRight, Check, Reveal } from "../Components/ui";
import { useT } from "../i18n/context";

export default function Solutions() {
  const t = useT();
  const pg = t.pages.solutions;
  return (
    <>
      <Seo title={t.seo.solutions.title} description={t.seo.solutions.description} />

      <PageHeader crumb={pg.crumb} eyebrow={pg.eyebrow} title={pg.title} accent={pg.accent} lede={pg.lede}
        art={<SolutionsArt />} />

      <section className="section">
        <div className="wrap sol-grid">
          {t.solutions.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 70}>
              <article className="sol-card" id={s.id}>
                <span className="sol-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="sx-kicker">{s.name}</span>
                <h2 className="h3">{s.headline}</h2>
                <p className="body">{s.body}</p>
                <ul className="check-list two">
                  {s.builds.map((b) => (
                    <li key={b}>
                      <span className="check-icon">
                        <Check size={12} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="link-arrow">
                  {t.common.discussProject} <ArrowRight size={14} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand title={pg.ctaTitle} accent={pg.ctaAccent} body={pg.ctaBody} />
    </>
  );
}
