import Image from "next/image";
import Input from "../forms/Input";

export default async function MessagesContent() {
  return (
    <div className="hidden md:flex flex-col h-full">
      <header className="mt-5 mx-5 border-b border-gray-400  pb-3 flex   justify-between ">
        <div className="flex items-center gap-5 ">
          <div className="h-9 w-9 rounded-full bg-black "></div>
          <h2 className="font-poppins text-[18px] font-medium">
            Nome usuario{" "}
          </h2>
        </div>

        <div className="flex gap-10 items-center">
          <Image
            src="/assets/search.svg"
            width={40}
            height={40}
            className="w-5 h-5"
            alt="Procure uma mensagem"
          />
          <Image
            src="/assets/3-points.svg"
            width={40}
            height={40}
            className="w-1 h-5"
            alt="Opções"
          />
        </div>
      </header>

      <div className="mt-10 mx-5 flex-1">
        <div className="flex gap-5 items-center  w-full">
          <div className="h-9 w-9 rounded-full bg-black "></div>
          <article className="bg-gray-150 rounded  flex pl-5 pr-5 relative  justify-between items-end min-h-9  max-w-80 h-full p-2 gap-2">
            <p className="flex flex-1   flex-wrap items-center  justify-end break-all font-dmSans ">
              Mensagem
            </p>
            <span className="font-poppins text-[12px] font-normal text-gray-900  flex  items-end  h-auto ">
              15:21
            </span>
          </article>
        </div>
        <div className="flex flex-row-reverse gap-5 items-center l w-full">
          <div className="h-9 w-9 rounded-full bg-black "></div>
          <article className="bg-gray-150 rounded  flex pl-5 pr-5 relative  justify-between items-end min-h-9  max-w-80 h-full p-2 gap-2">
            <p className="flex flex-1   flex-wrap items-center  justify-end break-all font-dmSans ">
              Mensagem
            </p>
            <span className="font-poppins text-[12px] font-normal text-gray-900  flex  items-end  h-auto ">
              15:21
            </span>
          </article>
        </div>
      </div>

      <div className="mx-5 mb-5">
        <div className="flex w-full">
          <button>
            <Image
              src="/assets/mood.svg"
              width={64}
              height={64}
              className="w-[25px] h-[25px] mr-10"
              alt="Icone emoji"
            />
          </button>

          <input
            type="text"
            className="border-black border placeholder:text-black rounded-[8px] flex-1 p-2 font-dmSans  text-[18px]"
            placeholder="Digite sua mensagem"
          />
          <div className="ml-10 flex items-center gap-5">
            <button>
              <Image
                src="/assets/add-circle.svg"
                width={64}
                height={64}
                className="w-[25px] h-[25px]"
                alt="Icone emoji"
              />
            </button>
            <button className="w-8 h-8">
              <Image
                src="/assets/mic.svg"
                width={64}
                height={64}
                className="w-[18px] h-[25px]"
                alt="Icone emoji"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
