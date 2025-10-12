import { useState } from "react";
import { MobileMenuItem } from "./MobileMenuItem";
import { SocialsMedia } from "./SocialsMedia";

interface MobileMenuProps {
  options: Array<{
    label: string,
    link: string,
    iconClass: string;
  }>
}

export function MobileMenu(props: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }


  return (
    <div className="md:hidden">
      <button onClick={openMenu}><i className="fa-solid fa-2xl fa-bars"></i></button>

      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="
          absolute 
          top-0 left-0 
          h-full min-h-screen 
          w-full 
          bg-orange-200/0
          z-10"
        ></div>
      )}

      <nav
        className="
        bg-black
        h-screen w-[70%]
        absolute
        top-0
        transition-all
        duration-1000
        z-20
        "
        style={{
          left: `${isMenuOpen ? "0px" : "-100vw"}`,
        }}

      >
        <ul className="mt-5 justify-between text-sm">
          {props.options.map(opt => {
            return (
              <MobileMenuItem
                onClick={() => closeMenu()}
                icon={<i className={`fa-solid ${opt.iconClass}`}></i>}
                text={opt.label} />
            );
          })}
        </ul>
        <div className="border w-full border-white/20 my-10"></div>
        <SocialsMedia />

      </nav>

    </div>
  );
}