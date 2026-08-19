import { useState } from "react";
import logo from "../assets/logo_png_g.svg";
function Square({ name, src }) {
  const [failed, setFailed] = useState(!src);
  const showImg = src && !failed;

  return (
    <div
      className={`wsq ${showImg ? "wsq--img" : "wsq--fallback"}`}
      role="img"
      aria-label={name}
    >
      {showImg ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="wsq__text">{name}</span>
      )}
    </div>
  );
}

export default function WorkSampleCard() {
 

  return (
    <div className="ws-cardwrap">
      <div className="ws-shadow" aria-hidden="true" />
      <div className="ws-card" role="group" aria-label="Our Work Sample">
        <Square name="hospital" src={logo} />
        <div className="ws-caption">
          Our Work Sample
          <span>Multi-industry solutions</span>
        </div>
      </div>
    </div>
  );
}
