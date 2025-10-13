import { useEffect, useReducer, useState } from "react";
import { ServiceApi } from "../services/servicesApi";
import type { Service, ServiceType } from "../@types/Service";


type ReducerAction = {
  type: string;
  payload: any
}

function serviceReducer(state: Array<Service>, action: ReducerAction) {
  if (action.type === "init") {
    return action.payload;
  }
  return state;
}

export function useServices() {
  const [services, serviceDispatch] = useReducer(serviceReducer, []);


  useEffect(() => {
    ServiceApi.getServices(data => {
      serviceDispatch({
        type: "init",
        payload: data,
      });
    })
  }, []);


  function getServicesBytype(serviceType: ServiceType) {
    return services.filter(service => service.type === serviceType);
  }

  return {
    services,
    getServicesBytype
  };
}