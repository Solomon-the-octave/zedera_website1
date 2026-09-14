import { Link } from "react-router-dom";
import Seo from "../Components/Seo";
import { ArrowRight, Label } from "../Components/ui";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you requested does not exist." />

      <section className="plan">
        <div className="wrap notfound">
          <Label>Error 404</Label>
          <h1 className="serif h1" style={{ marginTop: 22, maxWidth: 760 }}>
            That page does not exist.
          </h1>
          <p className="lede" style={{ marginTop: 22, maxWidth: 560 }}>
            The link may be out of date. Everything the site covers is reachable from the main
            navigation.
          </p>
          <div className="hero-actions">
            <Link to="/" className="btn btn-accent">
              Back to home <ArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
