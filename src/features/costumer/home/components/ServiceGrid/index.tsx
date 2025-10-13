import type { Service } from "../../../../../@types/Service";
import { ServiceCard } from "./ServiceCard";
import { ServiceCardFallback } from "./ServiceCardFallback";


interface ServiceGridProps {
  label: string;
  services: Array<Service>;
}

export function ServiceGrid(props: ServiceGridProps) {
  const { services, label } = props;


  return (
    <section className="py-10">
      <h3 className="text-2xl title text-left mt-4 mb-8">{label}</h3>

      <ul className="grid grid-cols-4 gap-10">
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
  );
}