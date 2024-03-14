import Image from "next/image";
import Link from "next/link";

export default async function SolicitationsEmpt() {
  return (
    <section className="flex flex-col  mt-10 md:mt-32">
      <h2 className="font-poppins text-[32px] font-semibold text-center">
        Solicitações
      </h2>
      <div className="mt-16 flex  flex-col-reverse gap-10  md:flex-row md:justify-between md:items-end">
        <div className="md:w-[50%] flex flex-col  ">
          <h2 className="font-poppins text-[24px] md2:text-[28px] font-medium flex gap-4 w-full">
            <span>(0)</span>Solicitaçoes encontradas
          </h2>
          <p
            className="font-dmSans text-[18px] md:text-[20px] md2:text-[24px] md:w-[80%] mt-10 mb-10 flex-1"
            style={{ lineHeight: "normal" }}
          >
            Não encontramos nenhuma solicitação para o seu usuario no momento,
            mas não se preocupe no momento que chegar alguma lhe avisaremos.
          </p>
          <Link href="/solicitations/1">
            <button className="bg-black font-poppins font-medium text-gray-50 uppercase rounded-[8px] p-3  md2:w-[27rem]">
              Ver solicitações enviadas
            </button>
          </Link>
        </div>
        <div className="md:w-[50%] flex items-start justify-center">
          <Image
            src="/illustrations/empty-box.svg"
            alt="Nenhuma solicitação encontrada"
            height={600}
            width={600}
            className="w-[20rem] h-[20rem]  md:w-[25rem] md:h-[20.75rem]"
          />
        </div>
      </div>
    </section>
  );
}
