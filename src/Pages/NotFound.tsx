import { Link } from "react-router-dom";
import Seo from "../Components/Seo";
import { Mark } from "../Components/Logo";
import { ArrowRight } from "../Components/ui";
import { useT } from "../i18n/context";

export default function NotFound() {
  const t = useT();
  const pg = t.pages.notFound;
  return (
    <>
      <Seo title={t.seo.notFound.title} description={t.seo.notFound.description} />
      <section className="notfound">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid" />
        </div>
        <div className="wrap notfound-inner">
          <Mark size={64} variant="auto" />
          <span className="nf-code">404</span>
          <h1 className="h1">{pg.title}</h1>
          <p className="lede">{pg.lede}</p>
          <Link to="/" className="btn btn-primary btn-lg">
            {pg.back} <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
