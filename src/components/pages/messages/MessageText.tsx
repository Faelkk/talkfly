import { useState } from "react";
import { MessagesData } from "@/actions/messages/getMessages";
import DropdownDeleteMessage from "@/components/Dropdown/DropdownDeleteMessage/DropdownDeleteMessage";

import { cn } from "@/functions/cn";
import { formatarHora } from "@/functions/format-date";
import { IsMyMessage } from "@/functions/isMyMessage";
import { useDropdown } from "@/hooks/useDropdown";

import IconsExpand from "@/components/icons/expand";

export default function MessageText({ message }: { message: MessagesData }) {
  const { isDropdownOpen, handleToggleDropdown } = useDropdown();
  const [isDeleteMessage, setIsDeleteMessage] = useState(false);

  const isMyMessage = IsMyMessage({ message });
  const [isExpanded, setIsExpanded] = useState(false);

  function handleLeave() {
    if (!isDropdownOpen) {
      setIsDeleteMessage(false);
    }
  }

  function handleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div
      id={message.id}
      className={cn(
        "flex gap-5 items-center w-full mb-2 relative",
        isMyMessage ? "flex-row-reverse" : ""
      )}
      key={message.id}
    >
      <article
        onMouseEnter={() => setIsDeleteMessage(true)}
        onMouseLeave={handleLeave}
        className={cn(
          "rounded flex  pl-5 pr-5 relative justify-between items-end max-w-40 sm:max-w-72  md:max-w-80 mb-2 overflow-hidden  h-full p-2  ",
          isExpanded ? " h-auto overflow-visible" : "",
          isMyMessage ? "bg-gray-200" : "bg-gray-50",
          message.content.length > 22 ? "flex-col gap-0" : "gap-5"
        )}
      >
        <div className="flex flex-col items-start">
          <p
            className={cn(
              "flex flex-col flex-1 justify-end break-all font-dmSans ",
              isExpanded ? "" : "text-overflow-ellipsis"
            )}
          >
            {isExpanded
              ? message.content
              : message.content.length > 190
              ? message.content.substring(0, 190) + "..."
              : message.content}
            {!isExpanded && message.content.length > 190 && (
              <span
                className="text-blue-500 text-nowrap cursor-pointer"
                onClick={handleExpand}
              >
                {" "}
                Leia mais
              </span>
            )}
          </p>
        </div>

        <span className="font-poppins text-[12px] font-normal text-gray-900 flex items-end h-auto ">
          {formatarHora(message.sent_at)}
        </span>
        {isDeleteMessage && isMyMessage && (
          <button
            className="absolute right-0 top-0 cursor-pointer"
            onClick={handleToggleDropdown}
          >
            <IconsExpand type={message.type} classname="h-5 w-5" />
          </button>
        )}
      </article>
      {isDropdownOpen && isMyMessage && (
        <DropdownDeleteMessage
          messageId={message.id}
          onLeave={handleToggleDropdown}
        />
      )}
    </div>
  );
}
