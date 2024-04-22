import { useState } from "react";
import { MessagesData } from "@/actions/messages/getMessages";
import MessageImageModal from "@/components/modal/messageImageModal/MessageImageModal";
import { cn } from "@/functions/cn";
import { IsMyMessage } from "@/functions/isMyMessage";
import { useDropdown } from "@/hooks/useDropdown";
import { useModal } from "@/hooks/useModal";
import Image from "next/image";

import IconsExpand from "@/components/icons/expand";
import DropdownDeleteMessage from "@/components/Dropdown/DropdownDeleteMessage/DropdownDeleteMessage";

export default function MessageImage({ message }: { message: MessagesData }) {
  const { isDropdownOpen, handleToggleDropdown } = useDropdown();
  const { isOpenModal, handleModal } = useModal();
  const [isDeleteMessage, setIsDeleteMessage] = useState(false);

  const isMyMessage = IsMyMessage({ message });

  function handleLeave() {
    if (!isDropdownOpen) {
      setIsDeleteMessage(false);
    }
  }

  function handleImage() {
    handleModal();
  }

  return (
    <>
      <div
        id={message.id}
        className={cn(
          "rounded flex  mb-2 relative pb-4",
          isMyMessage ? "flex-row-reverse" : ""
        )}
        onMouseEnter={() => setIsDeleteMessage(true)}
        onMouseLeave={handleLeave}
      >
        <div
          className={cn("relative flex", isMyMessage ? "flex-row-reverse" : "")}
          onClick={handleImage}
        >
          <Image
            src={message.content}
            alt="Imagem do chat app"
            width={1200}
            height={1200}
            priority
            className={cn(
              "max-w-[70%]  md:max-w-[330px] max-h-[320px] w-auto h-auto rounded-sm cursor-pointer"
            )}
          />
        </div>

        {isDeleteMessage && isMyMessage && (
          <button
            className={cn(
              "absolute right-0 top-0 cursor-pointer ",
              "bg-black bg-opacity-20"
            )}
            onClick={handleToggleDropdown}
          >
            <IconsExpand type={message.type} classname="h-5 w-5" />
          </button>
        )}

        {isDropdownOpen && (
          <DropdownDeleteMessage
            messageId={message.id}
            onLeave={handleToggleDropdown}
          />
        )}
      </div>

      {isOpenModal && (
        <MessageImageModal
          imageFull={message.content}
          handleModal={handleModal}
        />
      )}
    </>
  );
}
