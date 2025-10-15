import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  additionalStyle?: string;
}


export function ButtonFlat(props: ButtonProps) {
  return (
    <>
      <button
        className={`
        border 
        border-blue-400 
        text-blue-400 
        hover:text-white 
        hover:bg-blue-400 
        py-2 
        block  
        cursor-pointer

        ${props.additionalStyle ?? ""}
      `}>{props.children}</button>

    </>
  );
}