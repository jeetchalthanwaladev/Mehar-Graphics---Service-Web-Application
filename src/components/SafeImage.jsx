import { useState } from "react";

/**
 * Renders an <img/> when it loads; if it fails or src is missing,
 * shows a styled placeholder with an emoji or initials.
 */
export default function SafeImage({ src, alt = "", placeholder = "🧾", className = "" }) {
  const [failed, setFailed] = useState(!src);
  if (!src || failed) {
    // Fallback block
    return (
      <div className={`img-fallback ${className}`.trim()} aria-label={alt} role="img">
        <span className="img-fallback__emoji">{placeholder}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
