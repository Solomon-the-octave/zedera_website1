/* ============================================================
   ZEDERA: fixed company data (not translated).
   All visible copy lives in src/i18n/en.ts and src/i18n/am.ts.
   ============================================================ */

export const COMPANY = {
  name: "Zedera",
  legalName: "Zedera Tech Solutions",
  domain: "zederaet.com",
  url: "https://www.zederaet.com",
  email: "zederaet@gmail.com",
  /** display format */
  phones: ["+251 984 951 144", "+251 921 319 769"],
  /** WhatsApp number in international format, digits only */
  whatsapp: "251984951144",
  instagram: "https://www.instagram.com/zedera_et/",
};

export const telHref = (p: string) => `tel:${p.replace(/\s+/g, "")}`;
export const whatsappHref = (text: string) =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;

/** Route paths; labels come from the dictionary (t.nav[key]). */
export const ROUTES = [
  { href: "/services", key: "services" },
  { href: "/solutions", key: "solutions" },
  { href: "/process", key: "process" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export type ServiceId = "web" | "apps" | "systems" | "ai" | "design" | "growth";

/** Technology names are the same in every language. */
export const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Flutter",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Firebase",
  "OpenAI & Claude APIs",
  "Telegram Bot API",
  "Vercel",
  "AWS",
  "Figma",
];
