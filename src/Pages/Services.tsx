import Seo from "../Components/Seo";
import PageHeader from "../Components/PageHeader";
import CTABand from "../Components/CTABand";
import { Label, Reveal } from "../Components/ui";
import { CAPABILITY_ICONS } from "../Components/icons";
import { ENGAGEMENTS, SERVICES } from "../data/site";

export default function Services() {
  return (
    <>
      <Seo
        title="Capabilities & Services"
        description="Software engineering, applied AI, platform integration, product design, digital growth systems and dedicated engineering teams, delivered under a written scope."
      />

      <PageHeader
        backdrop="plan"
        layout="index"
        ghost="06"
        crumb="Services"
        label="Capabilities"
        title="What we build, and how it is scoped."
        lede="Six practices delivered by one team. Every engagement begins with a written scope, acceptance criteria and a named delivery lead."
        aside={
          <div className="header-chips">
            {SERVICES.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} className="pill">
                <i>{String(i + 1).padStart(2, "0")}</i>
                {s.tag}
              </a>
            ))}
          </div>
        }
      />

      {/* ---------- CAPABILITY BLOCKS ---------- */}
      <section className="section">
        <div className="wrap">
          {SERVICES.map((s, i) => {
            const Glyph = CAPABILITY_ICONS[s.id];
            return (
            <Reveal key={s.id}>
              <article className="cap-block" id={s.id}>
                <div className="cap-copy">
                  <div className="cap-marker">
                    <span className="cap-n">{String(i + 1).padStart(2, "0")}</span>
                    <span className="cap-tag">{s.tag}</span>
                    <span className="cap-icon" style={{ marginLeft: "auto" }}>
                      {Glyph ? <Glyph size={42} /> : null}
                    </span>
                  </div>
                  <h2 className="serif h3">{s.title}</h2>
                  <p className="lede" style={{ marginTop: 12, fontSize: 16 }}>
                    {s.summary}
                  </p>
                  <p className="body-sm" style={{ marginTop: 14 }}>
                    {s.detail}
                  </p>
                </div>

                <div className="cap-spec">
                  <div className="spec-row">
                    <div className="meta-key">Typical engagement</div>
                    <div className="meta-val">{s.typical}</div>
                  </div>
                  <div className="spec-row">
                    <div className="meta-key">Team</div>
                    <div className="meta-val">{s.lead}</div>
                  </div>
                  <div style={{ paddingTop: 20 }}>
                    <div className="meta-key">Tools & methods</div>
                    <div className="stage-outputs" style={{ marginTop: 12 }}>
                      {s.chips.map((c) => (
                        <span key={c} className="chip">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- ENGAGEMENT MODELS ---------- */}
      <section className="section alt">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <Label>Engagement models</Label>
              <h2 className="serif h2">Three ways to work with us.</h2>
              <p className="lede">
                The commercial shape follows the problem. We will tell you which one fits before you
                ask.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="cmp-wrap mt-56">
              <table className="cmp">
                <thead>
                  <tr>
                    <th scope="col">Model</th>
                    {ENGAGEMENTS.map((e) => (
                      <th key={e.title} scope="col">
                        {e.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Best for</th>
                    {ENGAGEMENTS.map((e) => (
                      <td key={e.title}>{e.bestFor}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Commercial</th>
                    {ENGAGEMENTS.map((e) => (
                      <td key={e.title}>
                        <strong>{e.commercial}</strong>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Duration</th>
                    {ENGAGEMENTS.map((e) => (
                      <td key={e.title}>{e.duration}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Team</th>
                    {ENGAGEMENTS.map((e) => (
                      <td key={e.title}>{e.team}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Same information, stacked, for phone widths */}
          <Reveal>
            <div className="cmp-stack mt-56">
              {ENGAGEMENTS.map((e) => (
                <div className="cmp-card" key={e.title}>
                  <h3 className="serif">{e.title}</h3>
                  <dl>
                    <dt>Best for</dt>
                    <dd>{e.bestFor}</dd>
                    <dt>Commercial</dt>
                    <dd>{e.commercial}</dd>
                    <dt>Duration</dt>
                    <dd>{e.duration}</dd>
                    <dt>Team</dt>
                    <dd>{e.team}</dd>
                  </dl>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        label="Scoping"
        title="Not sure which capability you need? That is what the first conversation is for."
        cta="Book a scoping call"
      />
    </>
  );
}
