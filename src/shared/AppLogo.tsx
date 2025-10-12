import logo from "../assets/images/logo.svg";

interface AppLogoProps {
  size?: string;
}

export function AppLogo(props: AppLogoProps) {
  return (
    <>
      <img
        className="
        block
        h-full
        select-none
        "
        src={logo}
        alt="Theo's Barbershop"
      
      />
    </>
  );
}