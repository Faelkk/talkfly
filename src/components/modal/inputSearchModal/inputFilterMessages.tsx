import { MessagesData } from "@/actions/messages/getMessages";

import { useMessage } from "@/context/messageContext";
import { formatTimestamp } from "@/functions/format-date";

export default function InputFilterMessages({
  message,
}: {
  message: MessagesData;
}) {
  const { userMessage } = useMessage();

  return (
    <>
      <div className="flex flex-col mx-5  bg-gray-400 rounded-[8px] p-2 hover:bg-gray-400/80 cursor-pointer mb-5">
        <span className="font-poppins text-[12px] font-normal text-gray-900  flex  items-end  h-auto">
          {formatTimestamp(message.sent_at)}
        </span>
        <div className="flex gap-2">
          <h2 className="font-poppins text-[16px]  text-gray-900 font-semibold">
            {userMessage?.username}:
          </h2>
          <p className="text-[16px] flex flex-1 font-dmSans text-gray-900 max-w-full truncate">
            {message.content}
          </p>
        </div>
      </div>
    </>
  );
}
