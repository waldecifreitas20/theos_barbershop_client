import { useState } from "react";
import { MobileMenuItem } from "./MobileMenuItem";

export function MobileMenu() {
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
          <MobileMenuItem
            onClick={() => closeMenu()}
            icon={<i className="fa-solid fa-house"></i>}
            text="Área do Cliente" />

          <MobileMenuItem
            onClick={() => closeMenu()}
            icon={<i className="fa-solid fa-scissors"></i>}
            text="Serviços" />

          <MobileMenuItem
            onClick={() => closeMenu()}
            icon={<i className="fa-solid fa-users"></i>}
            text="Nossa Equipe" />

          <MobileMenuItem
            onClick={() => closeMenu()}
            icon={<i className="fa-solid fa-wallet"></i>}
            text="Planos" />

          <MobileMenuItem
            onClick={() => closeMenu()}
            icon={<i className="fa-solid fa-receipt"></i>}
            text="Sobre" />

          <MobileMenuItem
            onClick={() => closeMenu()}
            icon={<i className="fa-solid fa-message"></i>}
            text="Fale Conosco" />
        </ul>
      </nav>
    </div>
  );
}