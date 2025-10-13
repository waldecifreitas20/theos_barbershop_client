import { Container } from "../../../../shared/Container";
import { SectionTitle } from "../components/SectionTitle";
import aboutImg from "../../../../assets/images/about.svg";

const cssStyle = {
  background: "linear-gradient(90deg, #D99F4E, #73552A)",
  color: "#261C0D"
}

export function AboutSection() {

  return (
    <section className="py-10 my-10 w-full block " style={cssStyle}>
      <Container>
        <div
          className="
            sm:gap-5 
            sm:flex 
            sm:justify-between 
            sm:items-center
            
            md:gap-10 
            
            lg:items-start
            lg:gap-20 
            
            xl:gap-30 
            ">

          <article className="block text-justify">
            <SectionTitle>Sobre Nós</SectionTitle>

            <p className="mt-15">
              A Theo’s Barbearia nasceu para redefinir o conceito de cuidado masculino. Mais do que um serviço, oferecemos uma experiência sob medida, onde cada detalhe é pensado para quem valoriza estilo, elegância e autenticidade. Em um ambiente contemporâneo e acolhedor, unimos a tradição das antigas barbearias à excelência do atendimento moderno.</p>
            <p>
              Nossos profissionais são verdadeiros artesãos do visual masculino — especialistas em cortes, barba e grooming, com técnicas refinadas e produtos de alta performance. Na Theo’s, o tempo desacelera. Aqui, você encontra um espaço para relaxar, renovar e sair com a confiança de quem sabe que está no seu melhor.
            </p>
          </article>

          <img
            className="
            block 
            w-full 
            mt-10 
            mx-auto
            
            sm:w-[300px]
            sm:m-0

            md:w-[400px]
            md:m-0 

            lg:w-[600px]
        
            "
            src={aboutImg} />

        </div>
      </Container>
    </section>
  );
}