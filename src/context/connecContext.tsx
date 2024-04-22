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
import { Message } from "./messageContext";
import { User } from "./userContext";

type IConnecContext = {
  connection: Message[] | null;
  connectionActive: Message | null;
  users: User[] | null;
  inputValue: string;
  filteredConnections: User[] | undefined;
  setUsers: Dispatch<SetStateAction<User[] | null>>;
  setInputValue: Dispatch<SetStateAction<string>>;
  setConnectionActive: Dispatch<SetStateAction<Message | null>>;
  setConnection: Dispatch<SetStateAction<Message[] | undefined>>;
};

export const ConnecContext = createContext<IConnecContext | null>(null);

export const useConnec = () => {
  const context = useContext(ConnecContext);

  if (context === null) {
    throw new Error("Connec context must be used inside a provider");
  }
  return context;
};

export function ConnecContextProvider({
  children,
  connection,
}: {
  children: ReactNode;
  connection: Message[] | null;
}) {
  const [users, setUsers] = useState<User[] | null>(null);
  const [inputValue, setInputValue] = useState("");

  const [connectionState, setConnection] = useState<Message[] | null>(
    connection
  );

  const [connectionActive, setConnectionActive] = useState<Message | null>(
    null
  );

  const filteredConnections = useMemo(
    () =>
      users?.filter((contact: User) =>
        contact.username.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [users, inputValue]
  );

  return (
    <ConnecContext.Provider
      value={{
        connection: connectionState,
        connectionActive,
        users,
        inputValue,
        filteredConnections,
        setInputValue,
        setConnectionActive,
        setConnection: setConnection as Dispatch<
          SetStateAction<Message[] | undefined>
        >,
        setUsers,
      }}
    >
      {children}
    </ConnecContext.Provider>
  );
}
