import { useEffect, useState } from "react";
import type { SubscriptionPlan } from "../../../../@types/SubscriptionPlan";
import { SubscriptionPlansApi } from "../../../../services/plansApi";
import { Container } from "../../../../shared/Container";
import { SectionTitle } from "../components/SectionTitle";
import { PlanCard } from "../components/PlanCard";

export function PlansSection() {
  const [plans, setPlans] = useState<Array<SubscriptionPlan>>([]);

  useEffect(() => {
    SubscriptionPlansApi.getAll(plans => {
      setPlans(plans);
    })
  }, [])

  return (
    <Container>

      <div className="text-center mt-20 mb-15">
        <SectionTitle>Conheça Nossos Planos</SectionTitle>
      </div>

      <ul
        className="
        flex flex-col         
        gap-4
        gap-y-10
        items-center  
        pb-20

        md:grid md:grid-cols-3
        lg:gap-8
          ">
        {
          plans.map(plan => {
            return (
              <PlanCard
                plan={plan}
                badge={plan.promote}
              />);
          })
        }
      </ul>

    </Container>
  );
}