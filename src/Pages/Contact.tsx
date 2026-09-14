import { useState } from "react";
import type { FormEvent } from "react";
import Seo from "../Components/Seo";
import PageHeader from "../Components/PageHeader";
import { ArrowRight, Label, Reveal } from "../Components/ui";
import { COMPANY, ENGAGEMENTS, NEXT_STEPS, SERVICES } from "../data/site";

/**
 * Where the contact form posts is configured, not hard coded, so the site
 * is not tied to one host.
 *
 *   VITE_FORM_ENDPOINT   an endpoint that accepts a JSON POST
 *                        (Formspree, Web3Forms, your own API route)
 *
 * Set it in Vercel under Settings -> Environment Variables, then redeploy.
 *
 * With no endpoint configured the form does NOT fail silently: submitting
 * opens the visitor's mail client with the brief pre-filled and addressed
 * to COMPANY.email, so the enquiry still reaches you.
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

type Status = "idle" | "sending" | "ok" | "err";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // bot trap
    if (data["bot-field"]) return;
    delete data["bot-field"];

    // No endpoint configured: hand the brief to the visitor's mail client
    // rather than pretending to send it.
    if (!FORM_ENDPOINT) {
      const body = [
        `Name: ${data.name || ""}`,
        `Organisation: ${data.organisation || ""}`,
        `Email: ${data.email || ""}`,
        `Capability: ${data.capability || ""}`,
        `Engagement: ${data.engagement || ""}`,
        "",
        data.message || "",
      ].join("\n");
      window.location.href =
        `mailto:${COMPANY.email}` +
        `?subject=${encodeURIComponent("Project brief from " + (data.name || "the website"))}` +
        `&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  return (
    <>
      <Seo
        title="Contact"
        description={`Talk to ${COMPANY.legalName} about a software, AI or platform engagement. Based in Addis Ababa, working across Ethiopia and East Africa.`}
      />

      <PageHeader
        backdrop="plan-dots"
        layout="compact"
        crumb="Contact"
        label="Get in touch"
        title="Tell us what you are trying to build."
        lede="Send a brief, even a rough one. We will come back with whether we are the right partner, and what scoping it properly would involve."
        aside={
          <div className="header-actions">
            <a className="action-chip" href={`mailto:${COMPANY.email}`}>
              <span className="chip-key">Email</span>
              <span className="chip-val">{COMPANY.email}</span>
            </a>
            <a className="action-chip" href={`tel:${COMPANY.phones[0]}`}>
              <span className="chip-key">Phone</span>
              <span className="chip-val">{COMPANY.phones.join(" / ")}</span>
            </a>
            <div className="action-chip">
              <span className="chip-key">Office</span>
              <span className="chip-val">{COMPANY.addressLines.join(", ")}</span>
            </div>
          </div>
        }
      />

      {/* ---------- FORM ---------- */}
      <section className="section">
        <div className="wrap contact-grid">
          <Reveal>
            <div>
              <Label>Send a brief</Label>
              <h2 className="serif h2" style={{ marginTop: 18 }}>
                The more specific, the faster we can be useful.
              </h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Enquiries are read by a delivery lead, not a sales inbox. If we are not the right
                fit for the work, we will say so and point you somewhere better.
              </p>

              <div className="detail-list">
                <div className="detail-row">
                  <div className="detail-key">Response</div>
                  <div className="detail-val">Within two working days</div>
                </div>
                <div className="detail-row">
                  <div className="detail-key">Hours</div>
                  <div className="detail-val">Monday to Friday, 9:00 to 18:00 EAT</div>
                </div>
                <div className="detail-row">
                  <div className="detail-key">Web</div>
                  <div className="detail-val">
                    <a href={COMPANY.url}>{`www.${COMPANY.domain}`}</a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form className="form" onSubmit={handleSubmit} noValidate={false}>
              {/* honeypot */}
              <p hidden>
                <label>
                  Leave this empty: <input name="bot-field" />
                </label>
              </p>

              {status === "ok" && (
                <div className="form-status ok" role="status">
                  Thank you, your brief has been received. We will reply within two working days.
                </div>
              )}
              {status === "err" && (
                <div className="form-status err" role="alert">
                  Something went wrong sending the form. Please email{" "}
                  <a href={`mailto:${COMPANY.email}`} style={{ textDecoration: "underline" }}>
                    {COMPANY.email}
                  </a>{" "}
                  instead.
                </div>
              )}

              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>

              <div className="field">
                <label htmlFor="organisation">Organisation</label>
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  autoComplete="organization"
                />
              </div>

              <div className="field">
                <label htmlFor="email">Work email</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>

              <div className="field">
                <label htmlFor="capability">What do you need</label>
                <select id="capability" name="capability" defaultValue="">
                  <option value="" disabled>
                    Select a capability
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="engagement">Preferred engagement</label>
                <select id="engagement" name="engagement" defaultValue="">
                  <option value="" disabled>
                    Select a model
                  </option>
                  {ENGAGEMENTS.map((e) => (
                    <option key={e.title} value={e.title}>
                      {e.title}
                    </option>
                  ))}
                  <option value="Open to advice">Open to advice</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Brief</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="What are you trying to build, what exists today, and what is the deadline?"
                />
              </div>

              <button type="submit" className="btn btn-accent" disabled={status === "sending"}>
                {status === "sending" ? "Sending" : FORM_ENDPOINT ? "Send brief" : "Compose email"}{" "}
                <ArrowRight />
              </button>

              <p className="form-note">
                {FORM_ENDPOINT
                  ? "Your details are used only to respond to this enquiry."
                  : `This opens your email app with the brief filled in, addressed to ${COMPANY.email}.`}
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHAT HAPPENS NEXT ---------- */}
      <section className="section alt">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <Label>What happens next</Label>
              <h2 className="serif h2">Three steps, no sales process.</h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="next-grid mt-56">
              {NEXT_STEPS.map((s) => (
                <div key={s.num} className="next-cell">
                  <div className="next-n">{s.num}</div>
                  <h3 className="serif h4">{s.title}</h3>
                  <p className="body-sm" style={{ marginTop: 10 }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
