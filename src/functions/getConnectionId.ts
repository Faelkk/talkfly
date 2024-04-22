import { Message } from "@/context/messageContext";
import { useUser } from "@/context/userContext";

export function useConnectionId({
  connection,
}: {
  connection: Message | null;
}) {
  const { user } = useUser();

  const connectionId =
    connection?.accepted_user_id !== user?.id
      ? connection?.accepted_user_id
      : connection?.inviter_user_id;

  return connectionId as string;
}
