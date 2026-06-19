import { forwardRef } from "react";

const Textarea = forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={`flex w-full rounded-xl border bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none ${className || ""}`}
    {...props}
  />
));

Textarea.displayName = "Textarea";
export { Textarea };
