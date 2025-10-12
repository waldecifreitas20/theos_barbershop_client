import background from "../../../../assets/images/hero-bg.svg";
import { AppLogo } from "../../../../shared/AppLogo";
import { Button } from "../../../../shared/Button";
import { Header } from "../components/Header";

export function TopSection() {
  return (
    <>
      <section
        className="
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

        <main className="flex flex-col items-center justify-center">
          <div className="h-[120px] md:h-[200px] mt-10">
            <AppLogo />
          </div>

          <div className="mt-20">
            <Button goTo="/agendamento">Agendar Atendimento</Button>
          </div>
        </main>
      </section>
    </>
  );
}