import Container from "@/components/Container/container";
import ConnectionsSection from "@/components/pages/connections/ConnectionsSection";
import SolicitationsSection from "@/components/pages/connections/SolicitationsSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conexões | Talkfly",
  description:
    "Começe novas conexões para ampliar sua rede de contatos e começar novas conversas",
};

export default async function ConnectionsPage() {
  return (
    <Container className="flex flex-col max-w-[85rem]">
      <SolicitationsSection />

      <ConnectionsSection />
    </Container>
  );
}
