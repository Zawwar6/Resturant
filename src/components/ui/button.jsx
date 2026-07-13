import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        gold: "bg-gold-gradient text-ink hover:scale-[1.03] shadow-lg shadow-gold/20",
        outline: "border border-gold/50 text-cream hover:bg-gold/10",
        ghost: "text-cream hover:text-gold",
      },
      size: {
        default: "px-8 py-4",
        sm: "px-5 py-2.5 text-xs",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  }
);

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
