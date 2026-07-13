import React from "react";

/**
 * Wraps an Input/Textarea/select and animates the label up
 * when the field has focus or a value (peer-based floating label).
 */
export function Field({ label, children }) {
  return (
    <div className="relative">
      {children}
      <label
        className="absolute left-0 -top-3.5 text-xs text-gold tracking-wide uppercase transition-all duration-300
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-smoke peer-placeholder-shown:normal-case
          peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold peer-focus:uppercase"
      >
        {label}
      </label>
    </div>
  );
}
