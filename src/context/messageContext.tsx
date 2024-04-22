"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { User } from "./userContext";
import { MessagesData } from "@/actions/messages/getMessages";

type IMessageContext = {
  messages: MessagesData[] | null;
  usernames: string[] | null;
  filteredMessages: MessagesData[] | null | undefined;
  messageIsOpen: boolean;
  messageFilterValue: string;
  userMessage: User | null;
  previewMessage: MessagesData | null;
  setPreviewMessage: Dispatch<SetStateAction<MessagesData | null>>;
  setIsMessageOpen: Dispatch<SetStateAction<boolean>>;
  setUsernames: Dispatch<SetStateAction<string[] | null>>;
  setUserMessage: Dispatch<SetStateAction<User | null>>;
  setMessages: Dispatch<SetStateAction<MessagesData[] | null>>;
  setMessageFilterValue: Dispatch<SetStateAction<string>>;
};

export type Message = {
  id: string;
  inviter_user_id: string;
  accepted_user_id: string;
};

export const MessageContext = createContext<IMessageContext | null>(null);

export const useMessage = () => {
  const context = useContext(MessageContext);

  if (context === null) {
    throw new Error("Message context must be used inside a provider");
  }
  return context;
};

export function MessageContextProvider({ children }: { children: ReactNode }) {
  const [userMessage, setUserMessage] = useState<User | null>(null);
  const [usernames, setUsernames] = useState<string[] | null>(null);
  const [messageFilterValue, setMessageFilterValue] = useState("");
  const [messageIsOpen, setIsMessageOpen] = useState(false);
  const [messages, setMessages] = useState<MessagesData[] | null>(null);
  const [previewMessage, setPreviewMessage] = useState<MessagesData | null>(
    null
  );

  const filteredMessages = useMemo(
    () =>
      messages?.filter((message) =>
        message.content.toLowerCase().includes(messageFilterValue.toLowerCase())
      ),
    [messages, messageFilterValue]
  );

  return (
    <MessageContext.Provider
      value={{
        messageFilterValue,
        userMessage,
        usernames,
        messageIsOpen,
        messages,
        filteredMessages,
        previewMessage,
        setPreviewMessage,
        setMessageFilterValue,
        setMessages,
        setIsMessageOpen,
        setUsernames,
        setUserMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}
