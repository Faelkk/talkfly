import AddNewConection from "@/components/connections/AddNewConection";
import Connections from "@/components/connections/Connections";
import ConnectionsEmpty from "@/components/connections/ConnectionsEmpty";
import Solicitations from "@/components/connections/Solicitations";
import SolicitationsEmpty from "@/components/connections/SolicitationsEmpty";
import Container from "@/components/container/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conexões | Talkfly",
  description:
    "Começe novas conexões para ampliar sua rede de contatos e começar novas conversas",
};

export default async function ConnectionsPage() {
  const hasSolicitations = true;
  const hasConnections = true;
  return (
    <Container className="flex flex-col max-w-[85rem]">
      <AddNewConection />
      {hasSolicitations ? <Solicitations /> : <SolicitationsEmpty />}

      {hasConnections ? <Connections /> : <ConnectionsEmpty />}
    </Container>
  );
}
