import type { ButtonHTMLAttributes } from "react";
import { Link } from "react-router";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCTA?: boolean;
  goTo?: string;
  colors?: {
    background: string;
    text: string;
  }
}


export function ButtonFlat(props: ButtonProps) {
  const { colors } = props;
  const buttonColors = props.isCTA ?
    `
    border border-orange-400
    text-orange-400 
    
    hover:text-white 
    hover:bg-orange-400 
    ` : `
    border
    text-${colors?.text ?? "blue-400"}
    hover:bg-${colors?.background ?? "blue-400"}
    hover:text-white
    hover:border-${colors?.background ?? "blue-400"}
    `;

  return (
    <>
      <Link to={props.goTo ?? ""}>
        <button
          className={`
          w-full 
          ${buttonColors}
          py-2 
          block  
          cursor-pointer
          `}>{props.children}</button>
      </Link>
    </>
  );
}