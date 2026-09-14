import Seo from "../Components/Seo";
import PageHeader from "../Components/PageHeader";
import CTABand from "../Components/CTABand";
import { Label, Reveal, Stat } from "../Components/ui";
import { CASE_GLYPHS } from "../Components/icons";
import Figure from "../Components/Figure";
import { IMAGES, CASE_IMAGE_KEYS } from "../data/images";
import { CASES, SECTORS } from "../data/site";

export default function Work() {
  const counts = [
    { value: String(CASES.length), label: "Engagements listed" },
    { value: String(SECTORS.length), label: "Sectors covered" },
    { value: "3", label: "Engagement models" },
  ];

  return (
    <>
      <Seo
        title="Selected Work"
        description="Selected engagements from Zedera Tech Solutions: platforms, applied AI and operational systems across real estate, education, agriculture and professional services."
      />

      <PageHeader
        backdrop="plan-hatch-r"
        layout="editorial"
        crumb="Work"
        label="Selected engagements"
        title="Systems we have built, and what they had to solve."
        lede="Each entry states the sector, the engagement model, the stack and the outcome. Client names appear only where we have written permission to use them."
        aside={
          <div className="header-counts">
            {counts.map((c) => (
              <div key={c.label} className="count-cell">
                <Stat value={c.value} label={c.label} />
              </div>
            ))}
          </div>
        }
      />

      {/* ---------- CASES ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="grid" style={{ gap: 28 }}>
            {CASES.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <article className="case">
                  <div className="case-cover">
                    <Figure
                      slot={IMAGES[CASE_IMAGE_KEYS[i % CASE_IMAGE_KEYS.length]]}
                      fallback={(() => {
                        const F = CASE_GLYPHS[i % CASE_GLYPHS.length];
                        return <F size={200} />;
                      })()}
                      showCaption={false}
                    />
                  </div>

                  <div className="case-main">
                    {(() => {
                      const G = CASE_GLYPHS[i % CASE_GLYPHS.length];
                      return (
                        <span className="case-glyph">
                          <G size={116} />
                        </span>
                      );
                    })()}
                    <div className="case-sector">{c.sector}</div>
                    <h2 className="serif h3">{c.title}</h2>
                    <p className="body-sm" style={{ maxWidth: 620 }}>
                      {c.body}
                    </p>
                    <div className="stage-outputs" style={{ marginTop: 24 }}>
                      {c.capabilities.map((cap) => (
                        <span key={cap} className="chip">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="case-side">
                    <div>
                      <div className="meta-key">Engagement</div>
                      <div className="meta-val">{c.engagement}</div>
                    </div>
                    <div>
                      <div className="meta-key">Stack</div>
                      <div className="meta-val">{c.stack}</div>
                    </div>
                    <div>
                      <div className="meta-key">Outcome</div>
                      <div className="meta-val">{c.outcome}</div>
                    </div>
                    {c.tbd && (
                      <div
                        className="mono"
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          borderTop: "1px solid var(--border)",
                          paddingTop: 14,
                        }}
                      >
                        Placeholder entry, replace with a confirmed project
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SECTORS ---------- */}
      <section className="section alt">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <Label>Sectors</Label>
              <h2 className="serif h2">Industries we work across.</h2>
              <p className="lede">
                Operationally complex environments where the system is part of how the business
                actually runs.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="std-grid mt-56">
              {SECTORS.map((s, i) => (
                <div key={s} className="std-item">
                  <span className="mono" style={{ color: "var(--second-ink)", fontSize: 11 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        label="Your project"
        title="Have something specific in mind? Send us the brief."
        cta="Send a brief"
      />
    </>
  );
}
