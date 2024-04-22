import InputMessage from "@/components/helpers/input-message";
import Image from "next/image";
import InputFilterMessages from "./inputFilterMessages";
import { useMessage } from "@/context/messageContext";

export default function InputSearchModal({
  onToggle,
}: {
  onToggle: () => void;
}) {
  const { filteredMessages } = useMessage();
  return (
    <aside className="absolute h-full right-0 z-10 bg-gray-150 w-full md:w-[40%] shadow-sm border-l-2 border-gray-400 flex flex-col">
      <header className="h-[3.063rem] pb-5 mt-5">
        <section className="flex items-center justify-center mx-5 relative">
          <button className="mr-5 absolute left-0" onClick={onToggle}>
            <Image
              src="/assets/close.svg"
              width={40}
              height={40}
              className="w-5 h-5"
              alt="Fechar busca de mensagens"
            />
          </button>
          <h2 className="font-poppins text-black text-[18px]">
            Pesquisar mensagem
          </h2>
        </section>
      </header>

      <section className="flex-1">
        <InputMessage />
        <div className="border-2 border-gray-400 mt-5"></div>
        <section
          className="flex flex-col mt-5 max-h-[37.5rem] overflow-y-auto"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "transparent transparent",
          }}
        >
          {filteredMessages && filteredMessages.length > 0 ? (
            filteredMessages.map((message) => {
              if (message.content_type !== "Image") {
                return (
                  <InputFilterMessages key={message.id} message={message} />
                );
              } else {
                return null;
              }
            })
          ) : (
            <div className="flex justify-center mt-10">
              <span>Nenhuma mensagem encontrada</span>
            </div>
          )}
        </section>
      </section>
    </aside>
  );
}
