import type { ReactElement } from "react";

interface MobileMenuItemProps {
  text: string;
  icon: ReactElement;
  onClick: () => void;
}


export function MobileMenuItem(props: MobileMenuItemProps) {
  return (
    <li>
      <a
        className=" 
        leading-[70px] 
        text-lg 
        px-4 
        flex
        gap-4 items-center
        hover:bg-blue-400 hover:text-black"
        href="#"
        onClick={props.onClick}
      >
        <span className="inline-block w-[20px] text-center">{props.icon}</span>
        <span>{props.text}</span>
      </a>
    </li>
  );
}