import type { Option } from "../@types/Option";
import { AppLogo } from "../components/AppLogo";
import { BackToHomeButton } from "../components/BackToHomeButton";
import { Select } from "../components/Select";

const options = [
  { id: "0", value: "Cabelo" },
  { id: "1", value: "Barba" },
  { id: "2", value: "Sombrancelha" },
  { id: "01", value: "Cabelo e Barba" },
  { id: "02", value: "Cabelo e Sombancelha" },
  { id: "12", value: "Barba e Sombrancelha" },
  { id: "012", value: "Completo" },
];

export function ServiceScheduleView() {
  function handleSelectService(opt: Option) {

  }

  return (
    <>
      <main id="background-app" className="py-10">
        <section className="text-white z-10 w-fit mx-auto">
          <AppLogo />


          <form className="bg-zinc-950/70 backdrop-blur-md py-6 px-4 rounded-2xl flex flex-col gap-4 min-w-[300px]">
            <legend className="text-2xl mb-5 text-center">Agende Seu Corte</legend>
            <input type="text" placeholder="Seu nome" className="outline-0" />

            <div>
              <label htmlFor="date">Data: </label>
              <input type="date" id="date" className="outline-0" />
            </div>

            <Select
              label="Tipo de Serviço: "
              options={options}
              onSelected={handleSelectService}
            />

            <button className="bg-blue-500 hover:bg-blue-600 mt-5 rounded-md py-2">Agendar</button>
          </form>

          <BackToHomeButton />

        </section>
      </main>
    </>
  );
}