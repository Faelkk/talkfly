import Image from "next/image";

export default async function Solicitations() {
  return (
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
  );
}
