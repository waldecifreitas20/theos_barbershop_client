import type { SubscriptionPlan } from "../@types/SubscriptionPlan";
import { SUBSCRIPTION_PLANS } from "../mock/plans";

async function getAll(callback: (plans: Array<SubscriptionPlan>) => void) {
  let promisse = setTimeout(() => {
    callback(SUBSCRIPTION_PLANS);

    clearTimeout(promisse);
  }, 1000);
}


export const SubscriptionPlansApi = {
  getAll,
}