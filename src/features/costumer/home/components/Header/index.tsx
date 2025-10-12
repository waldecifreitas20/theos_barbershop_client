import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

const menuOptions = [
  {
    label: "Área do Cliente",
    link: "",
    iconClass: "fa-house"
  },
  {
    label: "Serviços",
    link: "",
    iconClass: "fa-scissors"
  },
  {
    label: "Nossa Equipe",
    link: "",
    iconClass: "fa-users"
  },
  {
    label: "Planos",
    link: "",
    iconClass: "fa-wallet"
  },
  {
    label: "Sobre",
    link: "",
    iconClass: "fa-receipt"
  },
  {
    label: "Fale Conosco",
    link: "",
    iconClass: "fa-message"
  },
];

export function Header() {

  return (
    <>
      <header className="px-5 py-8 text-white">
        <MobileMenu options={menuOptions} />
        <DesktopMenu options={menuOptions} />
      </header>
    </>
  );
}