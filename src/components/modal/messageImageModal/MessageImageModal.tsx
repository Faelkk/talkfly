import { useOutsideClick } from "@/hooks/useOutsideClick";
import Image from "next/image";
import { useRef } from "react";

export default function MessageImageModal({
  imageFull,
  handleModal,
}: {
  imageFull: string;
  handleModal: () => void;
}) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, handleModal);
  return (
    <aside className="fixed inset-0 flex items-center justify-center bg-[#111B21]/50 z-10 backdrop-blur-md ">
      <div className="relative h-full w-full flex items-center justify-center">
        <Image
          ref={modalRef}
          src={imageFull}
          alt="Imagem do chat app"
          width={1200}
          height={1200}
          priority
          className="max-w-[12rem] max-h-[12rem] pp:max-w-[20rem] pp:max-h-[25rem] md:max-w-[37.5rem] md:max-h-[37.5rem] w-auto h-auto rounded-sm"
        />
        <button onClick={handleModal}>
          <Image
            src="/assets/close.svg"
            height={32}
            width={32}
            alt="Fechar modal"
            className="w-5 h-5 absolute right-3 top-3 "
          />
        </button>
      </div>
    </aside>
  );
}
