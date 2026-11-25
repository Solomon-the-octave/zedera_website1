import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { COMPANY } from "../data/site";

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Per-page head management for the SPA: title, description, canonical
 * and Open Graph / Twitter tags. Without this every route shares one
 * title and link previews show nothing useful.
 */
export default function Seo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Brand first on the home page so the tab and search result read "Zedera ...";
    // page name first elsewhere ("Services | Zedera Tech Solutions").
    const fullTitle =
      pathname === "/" ? `${COMPANY.legalName} | ${title}` : `${title} | ${COMPANY.legalName}`;
    const url = `${COMPANY.url}${pathname === "/" ? "" : pathname}`;

    document.title = fullTitle;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertLink("canonical", url);

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: COMPANY.legalName,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
  }, [title, description, pathname]);

  return null;
}
