import { Link } from "react-router-dom";
import Seo from "../Components/Seo";
import CTABand from "../Components/CTABand";
import { ArrowRight, Check, Label, Reveal, Stat, TbdNote, Ticker } from "../Components/ui";
import SystemDiagram from "../Components/SystemDiagram";
import Figure from "../Components/Figure";
import { IMAGES } from "../data/images";
import { CAPABILITY_ICONS, AboutPanel } from "../Components/icons";
import { COMPANY, HERO_STATS, SERVICES, STACK, STAGES, STANDARDS, TBD } from "../data/site";

function Icon({ id, className }: { id: string; className?: string }) {
  const C = CAPABILITY_ICONS[id];
  return C ? (
    <span className={className}>
      <C size={40} />
    </span>
  ) : null;
}

export default function Home() {
  return (
    <>
      <Seo
        title="Software Engineering, AI & Digital Systems"
        description="Zedera Tech Solutions is an engineering partner for organisations in Ethiopia and East Africa, building software, applied AI, platform integrations and dedicated technical teams."
      />

      {/* ---------- HERO ---------- */}
      <section className="plan">
        <div className="wrap hero">
          <div className="hero-split">
            <div className="hero-body">
              <Label>Engineering partner, Addis Ababa</Label>

              <h1 className="serif h1">
                Software, AI and digital systems built to <span className="em-ink">run in production</span>.
              </h1>

              <p className="lede">
                Zedera Tech Solutions designs, builds and operates the systems organisations depend
                on. Engineered to a standard, documented for handover, and supported by a team you
                can reach.
              </p>

              <div className="hero-actions">
                <Link to="/contact" className="btn btn-accent">
                  Start a project <ArrowRight />
                </Link>
                <Link to="/services" className="btn btn-outline">
                  View capabilities
                </Link>
              </div>
            </div>

            <SystemDiagram />
          </div>
        </div>

        <div className="stat-rail">
          <div className="wrap">
            <div className="grid">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="stat-cell">
                  <Stat value={s.value} label={s.label} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Ticker items={STACK.flatMap((g) => g.items)} />
      </section>

      {/* ---------- CAPABILITIES ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <Label>Capabilities</Label>
              <h2 className="serif h2">Six practices, one delivery team.</h2>
              <p className="lede">
                Most engagements draw on more than one. They are run by the same delivery lead, to
                the same standard, under a single written scope.
              </p>
            </div>
          </Reveal>

          <div className="grid g-3 gap-lg mt-56">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <article className="card" style={{ height: "100%" }}>
                  <div className="card-top">
                    <div className="card-index">{String(i + 1).padStart(2, "0")}</div>
                    <Icon className="cap-icon" id={s.id} />
                  </div>
                  <h3 className="serif h3">{s.title}</h3>
                  <p className="body-sm">{s.summary}</p>
                  <div className="card-list">
                    {s.chips.slice(0, 4).map((c) => (
                      <span key={c} className="chip">
                        {c}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-40">
              <Link to="/services" className="btn btn-outline">
                All capabilities <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- STACK ---------- */}
      <section className="section ink">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <Label light>Technology</Label>
              <h2 className="serif h2 on-dark">
                A deliberately boring stack, chosen to still be maintainable in five years.
              </h2>
              <p className="lede">
                We pick proven tools over novel ones, and we write down why. Every architecture
                decision is recorded so the next engineer, ours or yours, can follow the reasoning.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="stack-grid mt-56">
              {STACK.map((g) => (
                <div key={g.group} className="stack-cell">
                  <div className="meta-key">{g.group}</div>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          {TBD.unverified && <TbdNote>Placeholder, confirm stack before publishing</TbdNote>}
        </div>
      </section>

      {/* ---------- DELIVERY STANDARDS ---------- */}
      <section className="section alt">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <Label>Delivery standards</Label>
              <h2 className="serif h2">Applied on every engagement, without being asked.</h2>
              <p className="lede">
                These are the baseline engineering practices. They sit in the scope document, not
                the sales pitch.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="std-grid mt-56">
              {STANDARDS.map((s) => (
                <div key={s} className="std-item">
                  <Check />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- IMAGE BAND ---------- */}
      <section className="band">
        <Figure slot={IMAGES.office} fallback={<AboutPanel />} showCaption={false} />
        <div className="wrap band-body">
          <Label light>The team</Label>
          <h2 className="serif h2 on-dark">
            Engineers, designers and AI specialists, building from Addis Ababa.
          </h2>
        </div>
      </section>

      {/* ---------- HOW WE DELIVER (horizontal rail) ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <Label>How we deliver</Label>
              <h2 className="serif h2">Five stages, each with a defined output.</h2>
              <p className="lede">
                You always know which stage the engagement is in, what comes out of it, and who is
                accountable for it.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="step-rail mt-56">
              {STAGES.map((s) => (
                <div key={s.num} className="step-cell">
                  <div className="step-n">
                    {s.num} / {s.duration}
                  </div>
                  <h3 className="serif">{s.short}</h3>
                  <p>{s.outputs[0]}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-40">
              <Link to="/process" className="btn btn-outline">
                The full delivery process <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand label="Get in touch" title={`Talk to ${COMPANY.name} about the system you need.`} />
    </>
  );
}
