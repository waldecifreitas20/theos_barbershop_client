import type { Barber } from "../@types/Barber";

export const BARBERS: Array<Barber> = [
  {
    cpf: "00000000000",
    email: "barber@email.com",
    isVacation: false,
    launchTime: "12:00",
    name: "Carlos Becker",
    phone: "00 99955-0022",
    profilePhoto: "src/assets/images/barber-1.jpg",
    register: (Math.random() * 1000000).toString(),
    services: ["beard", "eyebrow", 'hair'],
    topSkill: "Especialista em crespos",
    workload: "08:00",
  },

  {
    cpf: "00000000000",
    email: "barber@email.com",
    isVacation: false,
    launchTime: "14:00",
    name: "Antenor Garcia",
    phone: "00 99955-0022",
    profilePhoto: "src/assets/images/barber-2.jpg",
    register: (Math.random() * 1000000).toString(),
    services: ["beard", "eyebrow", 'hair'],
    topSkill: "Mais Atendimentos",
    workload: "10:00",
  },
  {
    cpf: "00000000000",
    email: "barber@email.com",
    isVacation: false,
    launchTime: "16:00",
    name: "Vinicius Sefour",
    phone: "00 99955-0022",
    profilePhoto: "src/assets/images/barber-3.jpg",
    register: (Math.random() * 1000000).toString(),
    services: ["beard", "eyebrow", 'hair'],
    topSkill: "Especialista em todos os tipos de cabelo",
    workload: "12:00",
  },
];