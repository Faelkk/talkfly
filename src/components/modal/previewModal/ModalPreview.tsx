import sendImage from "@/actions/messages/sendImage";
import SendIcon from "@/components/icons/send";
import { useConnec } from "@/context/connecContext";
import { Message } from "@/context/messageContext";
import { useConnectionId } from "@/functions/getConnectionId";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ModalPreview({
  onToggle,
  previewImg,
  file,
}: {
  onToggle: () => void;
  previewImg: string | null;
  file: File | null;
}) {
  const modalRef = useRef(null);
  const { connectionActive } = useConnec();
  const connectionId = useConnectionId({
    connection: connectionActive as Message,
  });
  useOutsideClick(modalRef, onToggle);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSend() {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("content", file as File);
    formData.append("contentType", "Image");
    formData.append("contactId", connectionId);

    const { ok } = await sendImage(formData);

    if (ok) {
      onToggle();
    }

    setIsLoading(false);
  }

  return (
    <aside className="fixed inset-0 flex items-center justify-center bbg-[#111B21]/50 z-10 backdrop-blur-md">
      <section className="bg-gray-200 w-[90%]  lg:max-w-[60rem] p-2 rounded flex flex-col items-center relative shadow-sm">
        <header className="h-12 flex items-center justify-center text-gray-800 w-full">
          <button
            className="w-12 h-12 flex items-center justify-center outline-none absolute left-0 top-3"
            onClick={onToggle}
          >
            {" "}
            <Image
              src="/assets/close.svg"
              alt="Fechar o modal"
              width={32}
              height={32}
              className="h-6 w-6"
            />
          </button>
        </header>
        <div className="flex-1 my-2 border">
          <Image
            alt="Prévia da imagem do input"
            width={1000}
            height={1000}
            className="   lg:max-w-[50rem] lg:max-h-[30rem] w-auto h-auto "
            priority
            src={previewImg!}
          />
        </div>

        <div className="w-full flex justify-end">
          <button
            className={`bg-[#00A884] p-2 p:p-3 rounded-full flex items-center justify-center ${
              isLoading ? "opacity-50 cursor-not-allowed bg-[#85afa6]" : ""
            }`}
            onClick={handleSend}
            disabled={isLoading}
          >
            <SendIcon />
          </button>
        </div>
      </section>
    </aside>
  );
}
