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
        border-blue-500 
        text-blue-500 
        hover:text-white 
        hover:bg-blue-500 
        py-2 
        block  
        cursor-pointer

        ${props.additionalStyle ?? ""}
      `}>{props.children}</button>

    </>
  );
}