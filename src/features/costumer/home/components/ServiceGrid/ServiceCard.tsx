import type { Service } from "../../../../../@types/Service";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard(props: ServiceCardProps) {
  const { service } = props;

  return (
    <>
      <li className="text-left">
        <div className="overflow-hidden h-[300px]">
          <img className="" src={service.imgUrl} alt={service.name} />
        </div>

        <p className="my-2 bg-orange-500 w-[100px] text-xs text-nowrap p-1">Cliente VIP R$ 0</p>

        <div className="text-left flex justify-between">
          <p>{service.name}</p>

          <p className="text-zinc-400 text-xs">
            <i className="fa-regular fa-clock mr-2"></i>
            {service.duration} min.</p>
        </div>

        <p className="text-xl mt-2">R$ {service.price}</p>
      </li>
    </>
  );
}