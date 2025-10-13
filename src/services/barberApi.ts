import { BARBERS } from "../mock/barbers";

function getBarbers(callback: (data: any) => any) {
  let promisse = setTimeout(() => {
    callback(BARBERS);

    clearTimeout(promisse);
  }, 1000);

}

export const BarbersApi = {
  getBarbers,
}
