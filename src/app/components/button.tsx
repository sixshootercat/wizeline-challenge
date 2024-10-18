"use client";
import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  JSXElementConstructor,
} from "react";
import { cn } from "../utils/styles";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: JSXElementConstructor<ButtonProps> = ({
  children,
  ...props
}: ButtonProps) => {
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
