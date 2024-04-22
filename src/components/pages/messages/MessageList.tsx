import { Message, useMessage } from "@/context/messageContext";
import { useConnectionId } from "@/functions/getConnectionId";
import { getMessages } from "@/actions/messages/getMessages";
import { useEffect, useState } from "react";
import MessageContent from "./MessageContent";
import { io } from "socket.io-client";
import { useConnec } from "@/context/connecContext";
import Spinner from "@/components/helpers/spinner";

export default function MessagesList() {
  const { messages, setMessages, setPreviewMessage, previewMessage } =
    useMessage();

  const { connectionActive } = useConnec();
  const connectionId = useConnectionId({
    connection: connectionActive as Message,
  });

  const [loading, setLoading] = useState(false);
  async function fetchMessages() {
    setLoading(true);
    const { data, ok } = await getMessages(connectionId);

    if (data && ok) {
      setMessages(data);
    }
    setLoading(false);
  }

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("messages@new", (newMessage) => {
      setMessages((prevMessages) => [...(prevMessages as any), newMessage]);

      setPreviewMessage(newMessage);
    });

    socket.on("messages@deleteAll", (deletedAllMessages) => {
      if (deletedAllMessages) {
        setMessages([]);
        setPreviewMessage(null);
      }
    });

    socket.on("messages@newImage", (newImage) => {
      setMessages((prevMessages) => [...(prevMessages as any), newImage]);
      setPreviewMessage(newImage);
    });

    return () => {
      socket.disconnect();
    };
  }, [previewMessage]);

  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("messages@delete", (deleteMessage) => {
      if (deleteMessage.messageDeleted) {
        setMessages(
          (prevMessages) =>
            prevMessages?.filter(
              (message) => message.id !== deleteMessage.messageId
            ) as any
        );

        if (messages!.length > 1) {
          const remainingMessages = messages?.filter(
            (message) => message.id !== deleteMessage.messageId
          );
          setPreviewMessage(remainingMessages![remainingMessages!.length - 1]);
        } else {
          setPreviewMessage(null);
        }
      }
    });
  }, [messages]);

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center mt-10">
        <Spinner />
      </div>
    );

  return (
    <>
      {messages &&
        messages.map((message) => (
          <MessageContent key={message.id} message={message} />
        ))}
    </>
  );
}
