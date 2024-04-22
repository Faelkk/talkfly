import Container from "@/components/Container/container";

import { Metadata } from "next";

import SolicitationsUserSection from "@/components/pages/Solicitations/SolicitationsUserSection";

export const metadata: Metadata = {
  title: "Solcitações | Talkfly",
  description:
    "Explore suas solicitações ou começe uma para uma iniciar nova conversa",
};

export default async function SolicitationsUser() {
  return (
    <Container className="flex flex-col max-w-[85rem]">
      <SolicitationsUserSection />
    </Container>
  );
}
