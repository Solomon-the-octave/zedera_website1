import { Link } from "react-router-dom";
import { ArrowRight, Label } from "./ui";

export default function CTABand({
  label = "Next step",
  title = "Tell us what you are trying to build.",
  cta = "Start a project",
}: {
  label?: string;
  title?: string;
  cta?: string;
}) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div>
          <Label>{label}</Label>
          <h2 className="serif h2" style={{ marginTop: 16 }}>
            {title}
          </h2>
        </div>
        <Link to="/contact" className="btn btn-primary">
          {cta} <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
