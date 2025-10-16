import background from "../../../../assets/images/hero-bg.svg";
import { AppLogo } from "../../../../shared/AppLogo";
import { Button } from "../../../../shared/Button";
import { Header } from "../components/Header";

export function TopSection() {
  return (
    <>
      <section
        className="
        mb-10
        h-screen w-full 
        bg-no-repeat bg-top 
        text-white"
        style={{
          background: `url(${background})`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
        <Header />

        <article className="flex flex-col items-center justify-center">
          <div className="h-[120px] lg:h-[200px] mt-10">
            <AppLogo />
          </div>

          <div className="my-10 lg:my-20">
            <Button goTo="/agendamento">Agendar Atendimento</Button>
          </div>
        </article>
      </section>
    </>
  );
}