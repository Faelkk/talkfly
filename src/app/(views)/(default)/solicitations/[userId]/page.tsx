import Container from "@/components/container/container";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solcitações | Talkfly",
  description:
    "Explore suas solicitações ou começe uma para uma iniciar nova conversa",
};

export default async function SolicitationsUser() {
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

      <div className="mt-10">
        <h2 className="font-poppins text-[32px] font-semibold mb-5">
          Solicitações recebidas
        </h2>
        <div className="bg-gray-200 rounded-2   flex md:items-center justify-between   p:flex-row  p:h-[4.375rem] mb-4 p-3 shadow-sm ">
          <div className="flex gap-[20px]">
            {" "}
            <div className="h-9 w-9 rounded-full bg-black md:ml-5"></div>
            <div className="flex flex-col">
              <h2 className="font-poppins font-medium  text-[16px] p2:text-[18px] ">
                Nome do usuario
              </h2>
              <span className="text-gray-600 text-[12px] font-poppins font-medium p:hidden p2:block">
                Pedido de conexão enviada
              </span>
            </div>
          </div>
          <button className="flex md:mr-5 gap-4  ">
            <Image
              src="/assets/close-circle.svg"
              width={24}
              height={24}
              alt="Cancelar solicitação"
            />
          </button>
        </div>
      </div>
    </Container>
  );
}
