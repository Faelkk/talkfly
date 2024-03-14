import Image from "next/image";

export default async function AddNewConection() {
  return (
    <section className="flex flex-col w-full mt-10">
      <h2 className="font-poppins text-[32px] font-semibold">Fazer conexão</h2>
      <div className="flex flex-col md:flex-row gap-10 mt-5 ">
        <form className="flex border-black border  rounded flex-1 p-4 bg-gray-50  justify-between items-center h-[60px]">
          <input
            type="text"
            className="font-dmSans placeholder:text-black text-[18px] w-full  "
            placeholder="Nome de usuario"
          />
          <Image
            src="assets/search.svg"
            width={40}
            height={40}
            className="h-5 w-5"
            alt="Enviar solicitação"
          />
        </form>
        <button className="font-poppins font-medium text-[16px] bg-purple-200  text-gray-50 p-3 w-full rounded p:w-[18rem] ">
          Enviar solicitação
        </button>
      </div>
    </section>
  );
}
