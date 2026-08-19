import { useEffect, useRef, useState } from "react";

/**
 * Inline editable text.
 * Double-click to edit; blur or Enter to finish.
 * Props:
 *  - value: string
 *  - onChange: (newValue) => void
 *  - as: "h1"|"h2"|"p"|"span" etc (default "span")
 *  - placeholder: string
 */
export default function EditableText({ value, onChange, as = "span", placeholder = "Double-click to edit" }) {
  const Tag = as;
  const ref = useRef(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!editing || !ref.current) return;
    const el = ref.current;
    el.focus();
    document.execCommand?.("selectAll", false, null);
  }, [editing]);

  function finish() {
    setEditing(false);
    const newVal = ref.current?.innerText ?? "";
    if (newVal !== value) onChange(newVal.trim());
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      finish();
    } else if (e.key === "Escape") {
      setEditing(false);
      if (ref.current) ref.current.innerText = value || "";
    }
  }

  return (
    <Tag
      ref={ref}
      onDoubleClick={() => setEditing(true)}
      onBlur={finish}
      onKeyDown={onKeyDown}
      contentEditable={editing}
      suppressContentEditableWarning
      className={`editable ${editing ? "is-editing" : ""}`}
      data-placeholder={placeholder}
    >
      {value || placeholder}
    </Tag>
  );
}
