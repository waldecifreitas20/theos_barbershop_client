import type { ButtonHTMLAttributes } from "react";
import { Link } from "react-router";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCTA?: boolean;
  goTo?: string;
  colors?:string;
}


export function Button(props: ButtonProps) {
  const { colors } = props;
  const baseColors = `
  text-white
    border-blue-400
    bg-blue-400
    hover:bg-blue-500
  `;
  const buttonColors = props.isCTA ?
    `
    text-white
    border-orange-400
    bg-orange-400 
    hover:bg-orange-500 
    ` : `${colors ?? baseColors}`;

  return (
    <>
      <Link to={props.goTo ?? ""}>
        <button
          className={`
          border
          w-full 
          ${buttonColors}
          p-3
          block
          cursor-pointer
    `}>{props.children}</button>
      </Link>
    </>
  );
}