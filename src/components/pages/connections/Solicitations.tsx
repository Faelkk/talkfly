"use client";

import { SolicitationsData } from "@/actions/solicitations/acceptSolicitation";
import SolicitationsCard from "./SolicitationsCard";

import { useSolicitation } from "@/context/solicitationContext";

export default function Solicitations() {
  const { solicitation: solicitations } = useSolicitation();

  return (
    <section className="mt-10">
      <h2 className="uppercase font-poppins font-medium">
        Recebidas - <span>{solicitations?.length}</span>
      </h2>

      <div className="mt-4">
        {solicitations?.map((solicita) => (
          <SolicitationsCard
            key={solicita.id}
            solicitation={solicita as unknown as SolicitationsData}
          />
        ))}
      </div>
    </section>
  );
}
