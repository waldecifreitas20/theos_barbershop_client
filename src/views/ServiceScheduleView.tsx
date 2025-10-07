import type { Appointment } from "../@types/Appointment";
import { AppLogo } from "../components/AppLogo";
import { BackToHomeButton } from "../components/BackToHomeButton";
import { Checkbox } from "../components/Checkbox";
import { Form } from "../components/Form";
import { Input } from "../components/Input";


export function ServiceScheduleView() {
  function handleSchedule(data: Appointment) {
    console.log(data);
  }

  return (
    <>
      <main id="background-app" className="py-10">
        <section className="text-white z-10 w-[300px] mx-auto">
          <AppLogo />

          <Form<Appointment> onSubmit={handleSchedule} data-type="Schedule">
            <Input
              type="text"
              name="Nome"
              label="Nome do Cliente:"
              isRequired
            />
            <Input
              type="date"
              label="Data do atendimento:"
              name="date"
              isRequired
            />

            <div className="flex justify-between">
              <Checkbox
                label="Cabelo"
                name="hair"
              />
              <Checkbox
                label="Barba"
                name="beard"
              />
              <Checkbox
                label="Sombrancelha"
                name="eyebrow"
              />
            </div>



            <button className="bg-blue-500 hover:bg-blue-600 mt-5 rounded-md py-2">Agendar</button>
          </Form>

          <BackToHomeButton />

        </section>
      </main>
    </>
  );
}