import { useState } from "react";
import type { FormEvent } from "react";
import Seo from "../Components/Seo";
import PageHeader from "../Components/PageHeader";
import { ContactArt } from "../Components/HeaderArt";
import { ArrowRight, Reveal, SectionHead } from "../Components/ui";
import { COMPANY, telHref, whatsappHref } from "../data/site";
import { useT } from "../i18n/context";

/**
 * Where the contact form posts is configured, not hard coded:
 *
 *   VITE_FORM_ENDPOINT   an endpoint that accepts a JSON POST
 *                        (Formspree, Web3Forms, your own API route)
 *
 * Set it in Vercel under Settings -> Environment Variables, then redeploy.
 *
 * With no endpoint configured the form does not fail silently: submitting
 * opens the visitor's mail client with the brief filled in, addressed to
 * COMPANY.email.
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

type Status = "idle" | "sending" | "ok" | "err";

export default function Contact() {
  const t = useT();
  const pg = t.pages.contact;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // bot trap
    if (data["bot-field"]) return;
    delete data["bot-field"];

    if (!FORM_ENDPOINT) {
      const body = [
        `${pg.name}: ${data.name || ""}`,
        `${pg.organisation}: ${data.organisation || ""}`,
        `${pg.emailField}: ${data.email || ""}`,
        `${pg.phone}: ${data.phone || ""}`,
        `${pg.need} ${data.service || ""}`,
        "",
        data.message || "",
      ].join("\n");
      window.location.href =
        `mailto:${COMPANY.email}` +
        `?subject=${encodeURIComponent(pg.mailSubject(data.name || ""))}` +
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
      <Seo title={t.seo.contact.title} description={t.seo.contact.description} />

      <PageHeader crumb={pg.crumb} eyebrow={pg.eyebrow} title={pg.title} accent={pg.accent} lede={pg.lede}
        art={<ContactArt />} />

      <section className="section section-tight">
        <div className="wrap contact">
          <Reveal>
            <div className="contact-side">
              <a className="contact-card dup" href={`mailto:${COMPANY.email}`}>
                <span className="contact-key">{pg.email}</span>
                <span className="contact-val">{COMPANY.email}</span>
              </a>
              <div className="contact-card dup">
                <span className="contact-key">{pg.phone}</span>
                {COMPANY.phones.map((p) => (
                  <a key={p} className="contact-val" href={telHref(p)}>
                    {p}
                  </a>
                ))}
              </div>
              <a
                className="contact-card dup"
                href={whatsappHref(t.common.whatsappText)}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-key">{pg.whatsapp}</span>
                <span className="contact-val">{pg.whatsappVal}</span>
              </a>
              <div className="contact-card">
                <span className="contact-key">{pg.office}</span>
                <span className="contact-val">{t.company.address.join(", ")}</span>
                <span className="contact-sub">{pg.hours}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form className="form" onSubmit={handleSubmit}>
              <p hidden>
                <label>
                  Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              {status === "ok" && (
                <div className="form-status ok" role="status">
                  {pg.ok}
                </div>
              )}
              {status === "err" && (
                <div className="form-status err" role="alert">
                  {pg.errBefore} <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> {pg.errAfter}
                </div>
              )}

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">{pg.name}</label>
                  <input id="name" name="name" type="text" required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="organisation">{pg.organisation}</label>
                  <input id="organisation" name="organisation" type="text" autoComplete="organization" />
                </div>
                <div className="field">
                  <label htmlFor="email">{pg.emailField}</label>
                  <input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="field">
                  <label htmlFor="phone">{pg.phoneField}</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="service">{pg.need}</label>
                <select id="service" name="service" defaultValue="">
                  <option value="" disabled>
                    {pg.selectService}
                  </option>
                  {t.services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value={pg.notSure}>{pg.notSure}</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">{pg.brief}</label>
                <textarea id="message" name="message" required placeholder={pg.briefPlaceholder} />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"}>
                {status === "sending" ? pg.sending : FORM_ENDPOINT ? pg.send : pg.compose} <ArrowRight />
              </button>

              <p className="form-note">{FORM_ENDPOINT ? pg.noteEndpoint : pg.noteMail(COMPANY.email)}</p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <Reveal>
            <SectionHead center eyebrow={pg.nextEyebrow} title={pg.nextTitle} accent={pg.nextAccent} />
          </Reveal>
          <div className="steps three">
            {pg.nextSteps.map((s, i) => (
              <Reveal key={s.num} delay={i * 70}>
                <div className="step">
                  <span className="step-num">{s.num}</span>
                  <h3 className="h4">{s.title}</h3>
                  <p className="body-sm">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
