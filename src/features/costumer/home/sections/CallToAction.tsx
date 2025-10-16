import { Button } from "../../../../shared/Button";
import { Container } from "../../../../shared/Container";
import { SectionTitle } from "../components/SectionTitle";

export function CallToAction() {
  return (
    <section
      className="
      bg-gradient-to-l from-blue-400 to-blue-600
      py-8
      ">
      <Container>
        <div className="gap-4 md:flex md:items-center md:justify-between">
          <article 
            className="
            mb-10 mx-auto 
            text-center 
            
            sm:w-[60%] 
            sm:grow-0
            
            md:m-0
            md:text-left 
            ">
            <SectionTitle margins="mb-4">Não perca mais tempo!</SectionTitle>
            <p className="opacity-80">Faça seu agendamento online e venha viver a experiência da nossa barbearia.</p>
          </article>

          <article className="w-full max-w-[300px] mx-auto md:m-0">
            <Button isCTA>Agendar atendimento</Button>
          </article>

        </div>
      </Container>
    </section>
  );
}