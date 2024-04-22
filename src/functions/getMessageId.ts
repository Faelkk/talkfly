import { MessagesData } from "@/actions/messages/getMessages";
import { useUser } from "@/context/userContext";

export function useMessageId({ message }: { message: MessagesData }) {
  const { user } = useUser();
  const messageId =
    message.sender_id !== user?.id ? message.receiver_id : message.sender_id;

  return messageId;
}
