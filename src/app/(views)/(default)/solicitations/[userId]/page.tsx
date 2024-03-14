import Container from "@/components/container/container";
import Solicitations from "@/components/solicitations/Solicitations";
import SolicitationsEmpty from "@/components/solicitations/SolicitationsEmpty";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solcitações | Talkfly",
  description:
    "Explore suas solicitações ou começe uma para uma iniciar nova conversa",
};

export default async function SolicitationsUser() {
  const hasSolicitations = false;

  return (
    <Container className="flex flex-col max-w-[85rem]">
      <section className="flex flex-col w-full mt-10">
        <h2 className="font-poppins text-[24px] font-semibold">
          Procurar solicitação
        </h2>
        <div className="flex flex-col md:flex-row gap-10 mt-5 ">
          <form className="flex border-black border  rounded flex-1 p-4 bg-gray-50  justify-between items-center h-[60px]">
            <input
              type="text"
              className="font-dmSans placeholder:text-black text-[18px] w-full  "
              placeholder="Procurar solicitações"
            />
            <Image
              src="/assets/search.svg"
              width={40}
              height={40}
              className="h-5 w-5"
              alt="Pesquisar solicitação"
            />
          </form>
          <button className="font-poppins font-medium text-[16px] bg-purple-200  text-gray-50 p-3 rounded w-[18rem] uppercase ">
            Pesquisar
          </button>
        </div>
      </section>

      {hasSolicitations ? <Solicitations /> : <SolicitationsEmpty />}
    </Container>
  );
}
