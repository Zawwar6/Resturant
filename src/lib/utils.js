import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely, resolving conflicts.
 * Standard shadcn/ui helper.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
