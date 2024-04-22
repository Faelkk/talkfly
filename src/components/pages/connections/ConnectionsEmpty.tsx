import Image from "next/image";

export default function ConnectionsEmpty() {
  return (
    <>
      <div className="border border-gray-400 mt-10 md:mt-32"></div>
      <section className="flex flex-col  mt-10 md:mt-32 mb-20">
        <h2 className="font-poppins text-[32px] font-semibold text-center md:text-start">
          Suas conexões
        </h2>
        <div className="mt-10 flex gap-10 flex-col md:flex-row justify-center w-full">
          <div className="flex justify-center md:justify-start md:w-[50%]">
            <Image
              src="/illustrations/default.svg"
              height={600}
              width={600}
              className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem]"
              alt="Suas conexões"
            />
          </div>
          <div className="flex flex-col  md:w-[50%]">
            <h2 className="font-poppins text-[24px] md2:text-[28px] font-medium flex gap-4 w-full">
              <span>(0)</span>Conexões encontradas
            </h2>
            <p className="font-dmSans text-[18px] md:text-[20px] md2:text-[24px]  mt-10 mb-10 xl:w-[70%]">
              Não encontramos nenhuma conexão com o seu usuário, que tal começar
              a se conectar com amigos e família?
            </p>
            <button className="bg-black font-poppins font-medium text-gray-50 uppercase rounded-[8px] p-3 w-full md2:w-[27rem]">
              Começar uma conexão
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
