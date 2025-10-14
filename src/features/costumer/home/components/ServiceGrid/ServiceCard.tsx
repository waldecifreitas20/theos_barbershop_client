import { useState } from "react";
import type { Service } from "../../../../../@types/Service";
import { Button } from "../../../../../shared/Button";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard(props: ServiceCardProps) {
  const [isMouseOver, setIsMouseOver] = useState(false)

  const { service } = props;

  return (
    <>
      <li className="text-left">

        <div
          className="
          relative 
          overflow-hidden 
          h-100px 
          
          lg:h-[300px]
          "
          onMouseOver={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >

          <img className="mx-auto block" src={service.imgUrl} alt={service.name} />
          {isMouseOver && (
            <div className="bg-black/70 h-full w-full flex items-center absolute top-0">
              <div className="max-h-[50px] w-[80%] mx-auto">
                <Button>Quero esse corte!</Button>
              </div>
            </div>
          )}

        </div>

        <p className="my-2 bg-orange-500 w-[100px] text-xs text-nowrap p-1">Cliente VIP R$ 0</p>

        <div className="text-left md:flex justify-between">
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