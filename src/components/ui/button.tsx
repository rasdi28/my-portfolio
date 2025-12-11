// src/components/ui/button.tsx
import * as React from "react";
import clsx from "clsx";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "default" | "ghost";
  as?: "button" | "a";
  href?: string;
};

export default function Button({ variant = "default", className = "", as = "button", href, children, ...rest }: Props) {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium shadow-sm";
  const styles =
    variant === "default"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-transparent text-slate-800 border border-slate-200 hover:bg-slate-50";

  if (as === "a") {
    return (
      <a href={href} className={clsx(base, styles, className)} {...(rest as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={clsx(base, styles, className)} {...rest}>
      {children}
    </button>
  );
}
