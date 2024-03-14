import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solcitações | Talkfly",
  description:
    "Explore suas solicitações ou começe uma para uma iniciar nova conversa",
};

export default async function SolicitationsPage() {
  return (
    <main>
      <h1>Solicitations</h1>
    </main>
  );
}
