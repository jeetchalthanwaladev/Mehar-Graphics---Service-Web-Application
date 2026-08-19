import { useRef, useState } from "react";

/**
 * Click image to replace. Calls onChange(url) when upload finishes (parent uploads).
 * Props:
 *  - src: string
 *  - alt: string
 *  - onPick: (File) => Promise<string> or File (parent handles upload)
 */
export default function EditableImage({ src, alt = "", onPick }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const showing = preview || src;

  async function handleChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    try {
      const url = await onPick(file);
      setPreview(null);
      // parent already applied change via its onPick
    } catch (e2) {
      alert("Upload failed");
      setPreview(null);
    }
  }

  return (
    <div className="editable-img-wrap" onClick={() => inputRef.current?.click()} title="Click to change image">
      <img src={showing} alt={alt} className="editable-img" />
      <div className="editable-badge">Change</div>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleChange} />
    </div>
  );
}
