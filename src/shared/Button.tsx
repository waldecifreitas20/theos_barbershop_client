import type { ButtonHTMLAttributes } from "react";
import { Link } from "react-router";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  goTo?: string;
}


export function Button(props: ButtonProps) {
  return (
    <Link to={props.goTo ?? ""}>
      <button
        className={`
        h-full
        bg-blue-500 
        hover:bg-blue-600 
        p-4 md:py-2
        w-full 
        block 
        cursor-pointer 
      `}>{props.children}</button >
    </Link >
  );
}