import Container from "@/components/container/container";
import Messages from "@/components/messages/Messages";

import MessagesNoConnections from "@/components/messages/MessagesNoConnections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talkfly - Conversas em Tempo Real",
  description:
    "Junte-se à comunidade Talkfly para explorar conversas em tempo real. Mergulhe em diversos assuntos, conecte-se com pessoas de mentalidade semelhante e amplie suas conexões.",
};

export default function HomePage() {
  const hasConnection = false;
  return (
    <Container className="flex max-w-[85rem] mt-10 justify-center ">
      <section className="bg-gray-50 w-full p:w-[500px] md:w-full rounded h-[48rem] flex shadow-md mb-10">
        {hasConnection ? <Messages /> : <MessagesNoConnections />}
      </section>
    </Container>
  );
}
