import { Container } from "../../../../shared/Container";
import { SectionTitle } from "../components/SectionTitle";
import { useServices } from "../../../../hooks/useServices";
import { ServiceGrid } from "../components/ServiceGrid";

export function ServicesSection() {
  const { getServicesBytype } = useServices();

  const hairs = getServicesBytype("hair");
  const beards = getServicesBytype("beard");

  return (
    <Container>
      <section className="text-center">
        <SectionTitle>Serviços</SectionTitle>
        <ServiceGrid label="Cortes de Cabelo" services={hairs} />
        <ServiceGrid label="Cortes de Barba" services={beards} />
      </section>
    </Container>
  );
}