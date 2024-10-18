"use client";
import { cn } from "@/app/utils/styles";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "uppercase rounded-full border border-solid border-transparent transition-colors flex items-center justify-center gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5",
        {
          "cursor-not-allowed bg-gray-400 text-gray-700": props.disabled,
          "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]":
            !props.disabled,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
