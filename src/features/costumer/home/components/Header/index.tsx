import { MobileMenu } from "./MobileMenu";

export function Header() {

  return (
    <>
      <header className="px-5 py-8 text-white">
        <MobileMenu />
      </header>
    </>
  );
}