"use client";

import { useSolicitation } from "@/context/solicitationContext";
import AddNewConnection from "./AddNewConection";
import SolicitationsEmpty from "./SolicitationsEmpty";
import Solicitations from "./Solicitations";

export default function SolicitationsSection() {
  const { solicitation } = useSolicitation();

  return (
    <>
      <AddNewConnection />
      {Array.isArray(solicitation) && solicitation.length ? (
        <Solicitations />
      ) : (
        <SolicitationsEmpty />
      )}
    </>
  );
}
