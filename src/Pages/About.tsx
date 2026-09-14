import Seo from "../Components/Seo";
import PageHeader from "../Components/PageHeader";
import CTABand from "../Components/CTABand";
import { Label, Reveal, Stat, TbdNote } from "../Components/ui";
import { AboutPanel } from "../Components/icons";
import Figure from "../Components/Figure";
import { IMAGES } from "../data/images";
import { ABOUT_PARAGRAPHS, HERO_STATS, PRINCIPLES, PULLQUOTE, TBD, TIMELINE } from "../data/site";

export default function About() {
  return (
    <>
      <Seo
        title="About the Firm"
        description="Zedera Tech Solutions is an engineering firm based in Addis Ababa, building software, AI systems and platforms for clients across Ethiopia and East Africa."
      />

      <PageHeader
        backdrop="plan-hatch"
        layout="rule"
        crumb="About"
        label="The firm"
        title="An engineering firm, not a website shop."
        lede="We scope systems properly, build them to a standard, and hand them over so they keep running without us."
        aside={
          <>
            <div className="header-counts">
              {HERO_STATS.slice(0, 3).map((s) => (
                <div key={s.label} className="count-cell">
                  <Stat value={s.value} label={s.label} />
                </div>
              ))}
            </div>
            {TBD.unverified && <TbdNote>Placeholder figures, replace before publishing</TbdNote>}
          </>
        }
      />

      {/* ---------- STORY ---------- */}
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <div>
              <Label>Who we are</Label>
              <h2 className="serif h2" style={{ marginTop: 18 }}>
                Built for organisations that need the system to{" "}
                <span className="em-ink">keep working</span>.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
                {ABOUT_PARAGRAPHS.map((p) => (
                  <p key={p.slice(0, 28)} className="body-sm">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Figure slot={IMAGES.team} fallback={<AboutPanel />} ratio="4 / 3" />
          </Reveal>
        </div>
      </section>

      {/* ---------- PULL QUOTE ---------- */}
      <section style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Reveal>
            <blockquote className="pullquote">
              <p>{PULLQUOTE.text}</p>
              <div className="attrib">{PULLQUOTE.attrib}</div>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="section alt">
        <div className="wrap split">
          <Reveal>
            <div>
              <Label>How we got here</Label>
              <h2 className="serif h2" style={{ marginTop: 18 }}>
                From a small team to an engineering partner.
              </h2>
              {TBD.unverified && (
                <p className="body-sm" style={{ marginTop: 18 }}>
                  Placeholder milestones. Replace with the firm's real history and dates.
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="timeline">
              {TIMELINE.map((t) => (
                <div className="tl-item" key={t.year}>
                  <div className="tl-year">{t.year}</div>
                  <h3 className="serif h4">{t.title}</h3>
                  <p className="body-sm" style={{ marginTop: 8 }}>
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PRINCIPLES ---------- */}
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <div>
              <Label>Operating principles</Label>
              <h2 className="serif h2" style={{ marginTop: 18 }}>
                What clients can expect, in writing.
              </h2>
              <p className="lede" style={{ marginTop: 18 }}>
                These four appear in every scope document we issue.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rule-list">
              {PRINCIPLES.map((p, i) => (
                <div className="rule-item" key={p.title}>
                  <div className="rule-num mono">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="serif h4">{p.title}</h3>
                    <p className="body-sm">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        label="Work with us"
        title="Looking for an engineering partner you can hold to a standard?"
      />
    </>
  );
}
