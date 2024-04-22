import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRef } from "react";
import { useToggle } from "@/hooks/useToggle";

import { useModal } from "@/hooks/useModal";
import DeleteOneMessageModal from "@/components/modal/deleteOneMessageModal/DeleteOneMessageModal";

export default function DropdownDeleteMessage({
  messageId,
  onLeave,
}: {
  messageId: string;
  onLeave: () => void;
}) {
  const { isOpen, handleToggle } = useToggle();
  const { isOpenModal, handleModal } = useModal();

  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, onLeave);

  return (
    <>
      <div
        className="absolute right-0 top-5 bg-gray-100 shadow p-2 rounded w-44 flex mt-2 z-10"
        ref={dropdownRef}
      >
        <div className="flex flex-col w-full items-start gap-2">
          <button
            className=" w-full hover:bg-gray-80 rounded p-2"
            onClick={handleModal}
          >
            Deletar Mensagem
          </button>
        </div>
      </div>

      {isOpenModal && (
        <DeleteOneMessageModal messageId={messageId} onToggle={handleToggle} />
      )}
    </>
  );
}
