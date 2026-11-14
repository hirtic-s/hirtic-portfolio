"use client";

import { useEffect, useId, useRef, useState } from "react";

const ADDRESS = "hirtic2004@gmail.com";

type Props = {
  className?: string;
  /** the popover opens above the button (the phone bar, the close) instead of under it */
  up?: boolean;
  children: React.ReactNode;
};

// The main action: a button that shows the address in a small card beside it, with a copy control,
// instead of handing off to whatever mail app the visitor's browser is wired to.
export default function EmailButton({ className = "btn btn--primary", up = false, children }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrap = useRef<HTMLSpanElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const copyBtn = useRef<HTMLButtonElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    copyBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      setCopied(true);
    } catch {
      // clipboard refused (an insecure context): the address is selectable text, so nothing is lost
      window.getSelection()?.selectAllChildren(wrap.current!.querySelector(".email-pop__addr")!);
    }
  }

  return (
    <span className="email-pop" data-up={up ? "" : undefined} ref={wrap}>
      <button
        type="button"
        className={className}
        ref={trigger}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        {children}
      </button>
      <span className="email-pop__card" id={id} role="dialog" aria-label="Email address" hidden={!open}>
        <span className="email-pop__addr">{ADDRESS}</span>
        <button type="button" className="email-pop__copy" ref={copyBtn} onClick={copy} aria-live="polite">
          {copied ? "Copied" : "Copy address"}
        </button>
      </span>
    </span>
  );
}
