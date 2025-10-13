import { useEffect, useState } from "react";
import { Container } from "../../../../shared/Container";
import { SectionTitle } from "../components/Header/SectionTitle";
import type { Service } from "../../../../@types/Service";
import { ServiceApi } from "../../../../services/servicesApi";
import { ServiceCardFallback } from "../components/ServiceCardFallback";
import { ServiceCard } from "../components/ServiceCard";

export function ServicesSection() {
  const [services, setServices] = useState<Array<Service>>([])

  useEffect(() => {
    ServiceApi.getServices(data => {
      setServices(data);
    })
  }, []);

  return (
    <Container>
      <section className="text-center">
        <SectionTitle>Serviços</SectionTitle>

        <h3 className="text-xl title text-left mt-4 mb-8">Cortes de Cabelo</h3>

        <ul className="grid grid-cols-4 gap-x-5 gap-y-15">
          {services.length === 0 ? (
            <>
              <ServiceCardFallback />
              <ServiceCardFallback />
              <ServiceCardFallback />
              <ServiceCardFallback />
            </>
          ) : (
            <>
              {services.map(service => {
                return (
                  <ServiceCard key={`service$card$${service.id}`} service={service} />
                );
              })}
            </>
          )}
        </ul>
      </section>
    </Container>
  );
}