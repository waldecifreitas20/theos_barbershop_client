import type { ServiceType } from "./Service";

export type Barber = {
  register: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
  services: Array<ServiceType>;
  launchTime: string;
  isVacation: boolean;
  profilePhoto: string;
  workload: string;
  topSkill: string;
}