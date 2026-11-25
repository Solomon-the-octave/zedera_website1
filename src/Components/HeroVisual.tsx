import { useT } from "../i18n/context";

/**
 * Hero illustration: one central dashboard connected to the modules a
 * business runs on. Figures shown are sample UI data, labelled as such.
 */
const POS = [
  { x: 24, y: 0 },
  { x: 54, y: 1 },
  { x: 4, y: 10 },
  { x: 74, y: 10 },
  { x: 0, y: 21 },
  { x: 80, y: 21 },
];

export default function HeroVisual() {
  const h = useT().hero;
  return (
    <div className="hv" aria-hidden="true">
      <svg className="hv-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        {POS.map((m, i) => (
          <line key={i} x1={m.x + 9} y1={m.y + 3.5} x2="50" y2="44" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>

      {POS.map((m, i) => (
        <div
          key={i}
          className="hv-chip"
          style={{ left: `${m.x}%`, top: `${m.y}%`, animationDelay: `${i * 0.6}s` }}
        >
          <span className="hv-chip-dot" />
          {h.modules[i]}
        </div>
      ))}

      <div className="hv-card on-dark">
        <div className="hv-bar">
          <span />
          <span />
          <span />
          <em>{h.overview}</em>
          <b>{h.sampleData}</b>
        </div>
        <div className="hv-greet">
          <strong>{h.greet}</strong>
          <small>{h.greetSub}</small>
        </div>
        <div className="hv-kpis">
          <div>
            <small>{h.kpiVisits}</small>
            <strong>2,418</strong>
            <i className="up">+12%</i>
          </div>
          <div>
            <small>{h.kpiOrders}</small>
            <strong>36</strong>
            <i className="up">+5</i>
          </div>
          <div>
            <small>{h.kpiEnquiries}</small>
            <strong>14</strong>
            <i>{h.kpiAnswered}</i>
          </div>
        </div>
        <div className="hv-chart">
          <div className="hv-chart-head">
            <small>{h.weekly}</small>
            <span>ETB</span>
          </div>
          <svg viewBox="0 0 300 90" preserveAspectRatio="none">
            <defs>
              <linearGradient id="hvFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#66CBB8" stopOpacity="0.35" />
                <stop offset="1" stopColor="#66CBB8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 70 L40 62 L80 66 L120 48 L160 52 L200 34 L240 38 L300 14 L300 90 L0 90 Z"
              fill="url(#hvFill)"
            />
            <path
              className="hv-line"
              d="M0 70 L40 62 L80 66 L120 48 L160 52 L200 34 L240 38 L300 14"
              fill="none"
              stroke="#3fae99"
              strokeWidth="2.2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        <div className="hv-chat">
          <span className="hv-avatar">AI</span>
          <p>{h.chat}</p>
        </div>
      </div>
    </div>
  );
}
