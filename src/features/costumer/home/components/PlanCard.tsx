import type { SubscriptionPlan } from "../../../../@types/SubscriptionPlan";
import { Button } from "../../../../shared/Button";
import { ButtonFlat } from "../../../../shared/ButtonFlat";

interface PlanCardProps {
  plan: SubscriptionPlan;
  badge?: any;
}

export function PlanCard(props: PlanCardProps) {
  const { plan } = props;

  return (
    <li
      className={`
      relative
      border ${props.badge ? "border-orange-400" : "border-white/70"}
      flex flex-col
      justify-between
      p-4 pt-10

      w-full h-full
      max-w-[360px]
      
      sm:p-8
      
      md:px-4     
      md:pt-14
      
      lg:py-8 lg:px-6 
      `}>
      {
        props.badge &&
        <p className="absolute top-0 left-0 px-4 py-1 bg-orange-400">{props.badge}</p>
      }

      <div className="text-center">
        <p className="title text-3xl">{plan.name}</p>
        <p className="text-3xl font-light mt-2">R$ {plan.price}<span>/mês</span></p>
        <p className="text-zinc-400 my-4">{plan.cta}</p>
      </div>

      <ul className="mt-10 mb-20">
        {plan.description.map((item, i) => {
          return (
            <li
              key={`plan${plan.id}-item${i}`}
              className="mb-4 flex items-baseline gap-2 text-sm lg:text-base"
            >
              <i className="fa-regular text-emerald-400 fa-circle-check"></i>
              <span className="leading-7">{item}</span>
            </li>
          );
        })}
      </ul>

      <Button 
      isCTA={props.badge}
      colors="
      bg-white text-black 
      
      hover:bg-blue-400 
      hover:text-white 
      hover:border-blue-400"
      >Quero esse plano</Button>
    </li>
  );
}