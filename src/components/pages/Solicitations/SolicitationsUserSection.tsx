"use client";

import { useSolicitation } from "@/context/solicitationContext";
import AddNewConnection from "../connections/AddNewConection";
import SolicitationSendEmpty from "@/components/pages/Solicitations/SolicitationSendEmpty";
import Solicitations from "@/components/pages/Solicitations/Solicitations";

export default function SolicitationsUserSection() {
  const { solicitationUser } = useSolicitation();

  return (
    <>
      <AddNewConnection />

      {solicitationUser?.length ? <Solicitations /> : <SolicitationSendEmpty />}
    </>
  );
}
