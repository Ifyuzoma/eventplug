import type { CSSProperties } from 'react';

/** Parses a plain CSS declaration string ("display:flex;gap:8px") into a React style object. */
export function sx(css: string): CSSProperties {
  const out: Record<string, string> = {};
  css.split(';').forEach((decl) => {
    const i = decl.indexOf(':');
    if (i === -1) return;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!prop || !val) return;
    const camel = prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_m, c: string) => c.toUpperCase());
    out[camel] = val;
  });
  return out as CSSProperties;
}
