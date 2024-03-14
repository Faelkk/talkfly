import Image from "next/image";

export default async function Connections() {
  return (
    <>
      <div className="border border-gray-150 mt-10 md:mt-10"></div>
      <section className="mt-10 mb-10">
        <h2 className="font-poppins text-[28px] font-semibold  text-center ">
          Suas conexões
        </h2>

        <div className="mt-5">
          <div className="rounded flex-col flex md:items-center justify-between h-[8rem] p:flex-row p:h-[4.375rem] p-3  border border-gray-600 bg-gray-50 relative">
            <div className="flex gap-[20px] items-center">
              <div className="h-9 w-9 rounded-full bg-black md:ml-5"></div>
              <div className="flex flex-col">
                <h2 className="font-poppins font-medium text-[16px] p2:text-[18px]">
                  Nome do usuário
                </h2>
                <span className="text-gray-600 text-[12px] font-poppins font-medium p:hidden p2:block"></span>
              </div>
              <button className="absolute  right-5">
                <Image
                  src="/assets/3-points.svg"
                  alt="Mais sobre"
                  width={22}
                  height={22}
                  className="h-4 w-1 "
                />
              </button>
            </div>

            <button className="p-2 w-full border border-gray-600 rounded bg-black text-gray-50 font-poppins  p:w-[14rem]  uppercase mr-10">
              Enviar mensagem
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
