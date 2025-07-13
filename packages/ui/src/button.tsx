"use client";

import { cn } from "@repo/common/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantClasses = {
  primary:
    "bg-primary text-black hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 disabled:opacity-50",
  outline:
    "border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-accent/50 disabled:opacity-50",
  secondary:
    "bg-secondary text-white hover:bg-secondary/80 focus:ring-2 focus:ring-secondary/50 disabled:opacity-50",
};

const sizeClasses = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
};

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex  items-center justify-center rounded-md font-medium transition-colors duration-200 shadow-sm focus:outline-none",
        variantClasses[variant],
        sizeClasses[size],
        className,
        "flex border-2"
      )}
    >
      {children}
    </button>
  );
};
