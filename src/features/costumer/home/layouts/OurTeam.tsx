import { useContext } from "react";
import { Container } from "../../../../shared/Container";
import { SectionTitle } from "../components/SectionTitle";
import { BarbersContext } from "../../../../context/BarbersContext";
import type { Barber } from "../../../../@types/Barber";

export function OurTeam() {
  const barberProvider = useContext(BarbersContext);

  return (
    <Container>
      <section className="pt-10 pb-20">
        <div className="text-center">
          <SectionTitle>Nossa Equipe</SectionTitle>
        </div>

        <ul className="grid grid-cols-3 gap-10">
          {barberProvider
            .getBarbers()
            .map((barber: Barber) => {
              return (
                <li className="bg-zinc-600">
                  <div className="overflow-hidden h-[350px]">
                    <img className="block" src={barber.profilePhoto} alt="" />
                  </div>
                  <div className="p-4">
                    <p className="uppercase text-xl">{barber.name}</p>
                    <p className="text-zinc-300 text-xs">{barber.topSkill}</p>
                  </div>
                </li>
              )
            })}
        </ul>
      </section>
    </Container>
  );
}