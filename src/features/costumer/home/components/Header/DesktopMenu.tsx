import { Container } from "../../../../../shared/Container";
import { SocialsMedia } from "./SocialsMedia";

interface DesktopMenuProps {
  options: Array<{ label: string }>
}

export function DesktopMenu(props: DesktopMenuProps) {
  return (
    <Container>
      <div className="hidden md:block relative w-full text-sm lg:text-base">

        <nav className="absolute top-0 z-0 flex justify-center w-full">
          <ul className="flex lg:gap-10 gap-5 justify-between w-fit">
            {props.options.map(opt => {
              return (
                <li>
                  <a
                    href="#"
                    className="
                    text-nowrap 
                    text-white/70 hover:text-blue-500
                  ">{opt.label}</a>
                </li>
              )
            })}
          </ul>
        </nav>

        <SocialsMedia />
        
      </div>
    </Container>
  );
}