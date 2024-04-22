"use client";

import SolicitationCard from "./SolicitationCard";
import { useSolicitation } from "@/context/solicitationContext";

export default function Solicitations() {
  const { solicitationUser } = useSolicitation();

  return (
    <div className="mt-10">
      <h2 className="font-poppins text-[32px] font-semibold mb-5">
        Solicitações enviadas
      </h2>

      <section className="flex flex-col max-h-[35.5rem] overflow-y-auto">
        {solicitationUser?.map((soli) => (
          <SolicitationCard solicitation={soli} key={soli.id} />
        ))}
      </section>
    </div>
  );
}
