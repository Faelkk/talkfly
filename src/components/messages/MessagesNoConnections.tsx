import Image from "next/image";
import HeaderMessages from "../headerMessages/HeaderMessages";
import MessagesNoContent from "./MessagesNoContent";
import Link from "next/link";

export default async function MessagesNoConnections() {
  return (
    <>
      <div className=" w-full  md:w-[300px] flex flex-col h-full border-r border-gray-400">
        <HeaderMessages />

        <div className="flex-1 flex justify-center items-center flex-col">
          <Image
            src="/illustrations/default.svg"
            width={400}
            height={400}
            className="h-[12.5rem] w-[12.5rem]"
            alt="Você ainda não tem nenhuma conexão feita"
          />

          <p className="font-dmSans text-[18px] w-[60%] text-center mt-20">
            Você ainda não tem conexões feitas no momento!
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Link href="/connections">
            <button className="mb-20 border border-black font-poppins font-medium text-[18px]  p-3 rounded">
              Procurar conexões
            </button>
          </Link>
        </div>
      </div>
      <MessagesNoContent />
    </>
  );
}
