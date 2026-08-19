import { useState } from "react";

export default function GalleryCard({ name, category, img }) {
  const [error, setError] = useState(!img);

  return (
    <div className="gallery-card hover-lift">
      {img && !error ? (
        <img src={img} alt={name} onError={() => setError(true)} />
      ) : (
        <div className="gallery-fallback">{name}</div>
      )}
      <p className="gallery-title">{name}</p>
    </div>
  );
}
