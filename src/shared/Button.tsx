import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  additionalStyle?: string;
  goTo? : string;
}


export function Button(props: ButtonProps) {
  return (
    <>
      <button
        className={`
        bg-blue-500 
        hover:bg-blue-600 
        py-2 
        block 
        cursor-pointer 

        ${props.additionalStyle ?? ""}
      `}>{props.children}</button>

    </>
  );
}