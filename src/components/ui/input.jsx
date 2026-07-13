import React from "react";
import { cn } from "@/lib/utils";

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "peer w-full bg-transparent border-b border-white/20 py-3 text-cream placeholder-transparent outline-none focus:border-gold transition-colors duration-300",
      className
    )}
    placeholder=" "
    {...props}
  />
));

// eslint-disable-next-line react/display-name
export const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "peer w-full bg-transparent border-b border-white/20 py-3 text-cream placeholder-transparent outline-none focus:border-gold transition-colors duration-300 resize-none",
      className
    )}
    placeholder=" "
    {...props}
  />
));
