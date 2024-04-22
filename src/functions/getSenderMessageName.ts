import { MessagesData } from "@/actions/messages/getMessages";
import { User, useUser } from "@/context/userContext";

export function useSenderMessage({
  previewMessage,
  filteredUser,
}: {
  previewMessage: MessagesData | null;
  filteredUser: User;
}) {
  const { user } = useUser();

  if (previewMessage) {
    return previewMessage!.sender_id === user?.id
      ? user.username
      : filteredUser?.username;
  }
}
