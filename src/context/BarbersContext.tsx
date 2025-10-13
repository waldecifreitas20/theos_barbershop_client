import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { BarbersApi } from "../services/barberApi";
import type { Barber } from "../@types/Barber";

export const BarbersContext = createContext<any>({});

export function BarbersProvider(props: PropsWithChildren) {
  const [barbers, setBarbers] = useState<Array<Barber>>([]);

  useEffect(() => {
    BarbersApi.getBarbers(barbers => {
      setBarbers(barbers);
    })
  }, [])


  function getBarbers() {
    return [...barbers];
  }


  return (
    <BarbersContext.Provider value={{
      getBarbers,
    }}>{props.children}</BarbersContext.Provider>
  );
}