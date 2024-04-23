import Container from "@/components/Container/container";

import MessagesSection from "@/components/pages/messages/MessagesSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talkfly - Conversas em Tempo Real",
  description:
    "Junte-se à comunidade Talkfly para explorar conversas em tempo real. Mergulhe em diversos assuntos, conecte-se com pessoas de mentalidade semelhante e amplie suas conexões.",
};

export default function HomePage() {
  return (
    <Container className="flex w-full  max-w-full px-1 md:px-4  md:max-w-[95rem] mt-10 justify-center ">
      <section className="bg-gray-50 w-full p:w-[500px] md:w-full rounded h-[48rem] flex shadow-md mb-10">
        <MessagesSection />
      </section>
    </Container>
  );
}
