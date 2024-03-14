export default async function Solicitations() {
  return (
    <section className="mt-10">
      <h2 className="uppercase font-poppins font-medium">
        Recebidas - <span>(3)</span>
      </h2>

      <div className="mt-4">
        <div className="bg-gray-200 rounded-2  flex-col   flex md:items-center justify-between h-[8rem]  p:flex-row  p:h-[4.375rem] mb-4 p-3 shadow-sm">
          <div className="flex gap-[20px]">
            {" "}
            <div className="h-9 w-9 rounded-full bg-black md:ml-5"></div>
            <div className="flex flex-col">
              <h2 className="font-poppins font-medium  text-[16px] p2:text-[18px] ">
                Nome do usuario
              </h2>
              <span className="text-gray-600 text-[12px] font-poppins font-medium p:hidden p2:block">
                Pedido de conexão recebido
              </span>
            </div>
          </div>
          <div className="flex md:mr-5 gap-4 ">
            <button className="  p-2 w-[9rem]  p:w-[7rem] p2:w-[8rem]  rounded border bg-gray-50 border-gray-600 font-medium  font-poppins">
              Recusar
            </button>

            <button className="bg-black text-gray-50  w-[9rem]  font-medium  p-2 p:w-[7rem] p2:w-[8rem] rounded">
              Aceitar
            </button>
          </div>
        </div>
        <div className="bg-gray-200 rounded-2  flex-col   flex md:items-center justify-between h-[8rem]  p:flex-row  p:h-[4.375rem] mb-4 p-3 shadow-sm">
          <div className="flex gap-[20px]">
            {" "}
            <div className="h-9 w-9 rounded-full bg-black md:ml-5"></div>
            <div className="flex flex-col">
              <h2 className="font-poppins font-medium  text-[16px] p2:text-[18px] ">
                Nome do usuario
              </h2>
              <span className="text-gray-600 text-[12px] font-poppins font-medium p:hidden p2:block">
                Pedido de conexão recebido
              </span>
            </div>
          </div>
          <div className="flex md:mr-5 gap-4 ">
            <button className="  p-2 w-[9rem]  p:w-[7rem] p2:w-[8rem]  rounded border bg-gray-50 border-gray-600 font-medium  font-poppins">
              Recusar
            </button>

            <button className="bg-black text-gray-50  w-[9rem]  font-medium  p-2 p:w-[7rem] p2:w-[8rem] rounded">
              Aceitar
            </button>
          </div>
        </div>
        <div className="bg-gray-200 rounded-2  flex-col   flex md:items-center justify-between h-[8rem]  p:flex-row  p:h-[4.375rem] mb-4 p-3 shadow-sm">
          <div className="flex gap-[20px]">
            {" "}
            <div className="h-9 w-9 rounded-full bg-black md:ml-5"></div>
            <div className="flex flex-col">
              <h2 className="font-poppins font-medium  text-[16px] p2:text-[18px] ">
                Nome do usuario
              </h2>
              <span className="text-gray-600 text-[12px] font-poppins font-medium p:hidden p2:block">
                Pedido de conexão recebido
              </span>
            </div>
          </div>
          <div className="flex md:mr-5 gap-4 ">
            <button className="  p-2 w-[9rem]  p:w-[7rem] p2:w-[8rem]  rounded border bg-gray-50 border-gray-600 font-medium  font-poppins">
              Recusar
            </button>

            <button className="bg-black text-gray-50  w-[9rem]  font-medium  p-2 p:w-[7rem] p2:w-[8rem] rounded">
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
