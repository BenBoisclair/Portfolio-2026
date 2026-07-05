// Maps a stack label to a Simple Icons brand glyph (build-time only, no runtime JS).
// Rendered monochrome (currentColor) to stay within the site's palette.
import {
  siLaravel,
  siVuedotjs,
  siInertia,
  siPostgresql,
  siRedis,
  siNextdotjs,
  siReact,
  siSupabase,
  siVercel,
  siNestjs,
  siFlutter,
} from "simple-icons";

interface Icon {
  path: string;
  title: string;
}

const MAP: Record<string, Icon> = {
  laravel: siLaravel,
  vue: siVuedotjs,
  inertia: siInertia,
  postgresql: siPostgresql,
  redis: siRedis,
  "next.js": siNextdotjs,
  "react native": siReact,
  react: siReact,
  supabase: siSupabase,
  vercel: siVercel,
  nestjs: siNestjs,
  flutter: siFlutter,
};

/** Returns the brand icon for a stack label, or null (e.g. "AWS" has none). */
export function techIcon(label: string): Icon | null {
  // strip a trailing version token: "Laravel 12" → "laravel", "Inertia v2" → "inertia"
  const key = label
    .toLowerCase()
    .replace(/\s+v?\d+(\.\d+)?$/i, "")
    .trim();
  return MAP[key] ?? MAP[label.toLowerCase()] ?? null;
}
