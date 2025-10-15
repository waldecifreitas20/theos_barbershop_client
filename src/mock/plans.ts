import type { SubscriptionPlan } from "../@types/SubscriptionPlan";

export const SUBSCRIPTION_PLANS: Array<SubscriptionPlan> = [
  {
    id: Math.random(),
    name: "Standard",
    price: 10.0,
    cta: "Cabe no bolso",
    description: [
      "1 atendimento com horário exclusivo no mês sem taxa.",
      "1 atendimento com horário flexível no mês com agendamento.",
      "Cancelamentos e alterações gratuitos.",
      "Sem descontos.",
    ],
  },
  {
    id: Math.random(),
    name: "Gold",
    price: 40.0,
    cta: "Ideal para todos",
    promote: "Mais Popular",
    description: [
      "2 atendimento com horário exclusivo no mês sem taxa.",
      "1 atendimento com horário flexível no mês sem agendamento.",
      "Cancelamentos e alterações gratuitos.",
      "20% de desconto.",
    ],
  },
  {
    id: Math.random(),
    name: "VIP",
    price: 50.0,
    cta: "Sempre na régua",
    description: [
      "4 atendimento com horário exclusivo no mês sem taxa.",
      "2 atendimento com horário flexível no mês sem agendamento.",
      "Cancelamentos e alterações gratuitos.",
      "50% de desconto.",
    ],
  },

];