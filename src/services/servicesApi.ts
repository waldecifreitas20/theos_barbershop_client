import { SERVICES } from "../mock/services";

async function getServices(callback: (data: any) => any) {
  let promisse = setTimeout(() => {
    callback(SERVICES);

    clearTimeout(promisse);
  }, 1000);

}

export const ServiceApi = {
  getServices,
}