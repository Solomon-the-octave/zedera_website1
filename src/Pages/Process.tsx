import Seo from "../Components/Seo";
import PageHeader from "../Components/PageHeader";
import CTABand from "../Components/CTABand";
import { Label, Reveal } from "../Components/ui";
import { STAGE_GLYPHS } from "../Components/icons";
import { STAGES } from "../data/site";

const COMMITMENTS = [
  {
    num: "01",
    title: "A named delivery lead",
    body: "One person accountable for the engagement, named in your scope document, reachable directly.",
  },
  {
    num: "02",
    title: "A written status note every week",
    body: "What shipped, what is next, what is blocked, and any decision we need from you.",
  },
  {
    num: "03",
    title: "A demo environment you can open",
    body: "Live from the first build increment, so progress is something you look at rather than something you are told about.",
  },
];

export default function Process() {
  return (
    <>
      <Seo
        title="Delivery Process"
        description="How Zedera runs an engagement: discovery and scoping, architecture and design, iterative build, launch and handover, then operate and improve."
      />

      <PageHeader
        backdrop="plan-rings"
        layout="centre"
        crumb="Process"
        label="Delivery"
        title="A delivery process you can hold us to."
        lede="Five stages, each with a defined output and an agreed exit condition. No stage begins before the previous one is signed off."
        aside={
          <div className="header-rail">
            {STAGES.map((s) => (
              <div key={s.num} className="rail-step">
                <div className="rail-num">
                  {s.num} / {s.duration}
                </div>
                <div className="rail-name">{s.short}</div>
              </div>
            ))}
          </div>
        }
      />

      {/* ---------- STAGES ---------- */}
      <section className="section">
        <div className="wrap">
          {STAGES.map((s, i) => {
            const Glyph = STAGE_GLYPHS[i];
            return (
            <Reveal key={s.num}>
              <div className="stage">
                <div className="stage-meta">
                  <div className="stage-num">{s.num}</div>
                  <div className="stage-dur">{s.duration}</div>
                  <span className="stage-glyph">
                    <Glyph size={74} />
                  </span>
                </div>
                <div className="stage-body">
                  <h2 className="serif h3">{s.title}</h2>
                  <p className="body-sm" style={{ maxWidth: 760 }}>
                    {s.body}
                  </p>

                  <div className="grid g-2 gap-lg" style={{ marginTop: 24, maxWidth: 760 }}>
                    <div>
                      <div className="meta-key">What we do</div>
                      <div className="meta-val">{s.us}</div>
                    </div>
                    <div>
                      <div className="meta-key">What we need from you</div>
                      <div className="meta-val">{s.you}</div>
                    </div>
                  </div>

                  <div className="stage-outputs">
                    {s.outputs.map((o) => (
                      <span key={o} className="chip">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- WEEKLY COMMITMENTS ---------- */}
      <section className="section ink">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <Label light>While the work runs</Label>
              <h2 className="serif h2 on-dark">Three things you get every week.</h2>
              <p className="lede on-dark">
                These are commitments, not aspirations. If we miss one, raise it with the delivery
                lead named in your scope.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="next-grid mt-56">
              {COMMITMENTS.map((c) => (
                <div key={c.num} className="next-cell">
                  <div className="next-n">{c.num}</div>
                  <h3 className="serif h4 on-dark">{c.title}</h3>
                  <p className="body-sm on-dark" style={{ marginTop: 10 }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        label="Start here"
        title="Every engagement begins with a scoping conversation."
        cta="Book a scoping call"
      />
    </>
  );
}
