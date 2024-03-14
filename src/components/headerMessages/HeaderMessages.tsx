import Image from "next/image";

export default async function HeaderMessages() {
  return (
    <header className="flex md:gap-10 mt-5 border-b border-gray-400 pb-5 justify-between">
      <span className="font-poppins font-medium text-[18px] ml-5">
        Mensagens{" "}
        <span className="font-poppins font-bold text-[18px] ">(0)</span>
      </span>
      <div className="flex items-center gap-5 mr-5">
        <Image
          src="/assets/add-circle.svg"
          width={32}
          height={32}
          className="h-5 w-5"
          alt="Adicionar contato"
        />
        <Image
          src="/assets/search.svg"
          width={32}
          height={32}
          className="h-5 w-5"
          alt="Procurar contato"
        />
      </div>
    </header>
  );
}
