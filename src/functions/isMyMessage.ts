import { MessagesData } from "@/actions/messages/getMessages";
import { useUser } from "@/context/userContext";

export function IsMyMessage({ message }: { message: MessagesData }) {
  const { user } = useUser();
  const connectionId = message.sender_id === user?.id ? true : false;

  return connectionId;
}
