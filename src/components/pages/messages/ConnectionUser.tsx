"use client";

import { ConnectionData } from "@/actions/connections/getConnections";
import { MessagesData } from "@/actions/messages/getMessages";
import { getOneMessage } from "@/actions/messages/getOneMessage";
import getUserById from "@/actions/user/getUserById";
import Spinner from "@/components/helpers/spinner";
import UserCard from "@/components/helpers/user-card";
import { Message } from "@/context/messageContext";

import { User } from "@/context/userContext";
import { cn } from "@/functions/cn";
import { formatarHora } from "@/functions/format-date";
import { useConnectionId } from "@/functions/getConnectionId";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { io } from "socket.io-client";

interface ConnectionUserProps {
  connection: ConnectionData;
  filteredConnections: User[] | undefined;
  onClickMessage: Dispatch<SetStateAction<Message | null>>;
  previewMessage: MessagesData | null;
  setPreviewMessage: Dispatch<SetStateAction<MessagesData | null>>;
  setUsers: Dispatch<SetStateAction<User[] | null>>;
  connectionActive: ConnectionData;
  setUserMessage: Dispatch<SetStateAction<User | null>>;
  setUsernames: Dispatch<SetStateAction<string[] | null>>;
  setIsMessageOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ConnectionUser({
  filteredConnections,
  connection,
  onClickMessage,
  connectionActive,
  setUserMessage,
  setUsernames,
  setUsers,
  setIsMessageOpen,
  previewMessage,
  setPreviewMessage,
}: ConnectionUserProps) {
  const connectionId = useConnectionId({ connection });
  const [connectionData, setConnection] = useState<User | null>(null);

  const [loading, setLoading] = useState(false);

  const handleFetchUser = async () => {
    setLoading(true);
    const { data } = await getUserById(connectionId);

    setConnection(data);
    setUsernames((prevState) => {
      if (!prevState) return [data?.username].filter(Boolean) as string[];
      if (prevState.includes(data!.username)) return prevState;
      return [...prevState, data?.username].filter(Boolean) as string[];
    });

    setUsers((prevState: any) => {
      if (!prevState) return [data];
      const userExists = prevState.some((user: User) => user.id === data?.id);
      if (userExists) return prevState;

      return [...prevState, data];
    });
    setLoading(false);
  };

  const handleFetchOneMessage = async () => {
    const { data } = await getOneMessage(connectionId);

    setPreviewMessage(data);
  };

  const onMessage = () => {
    onClickMessage(connection);
    setUserMessage(connectionData);
    setIsMessageOpen(true);
  };

  useEffect(() => {
    handleFetchUser();
    handleFetchOneMessage();
  }, [connectionId]);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("messages@new", (newMessage) => {
      setPreviewMessage(newMessage);
    });
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center mt-10">
        <Spinner />
      </div>
    );

  if (
    filteredConnections &&
    connectionData &&
    filteredConnections.some((filtered) => filtered.id === connectionId)
  ) {
    const filteredUser = filteredConnections.find(
      (filtered) => filtered.id === connectionId
    ) as User;

    return (
      <div
        key={filteredUser.id}
        className={cn(
          "flex items-center h-[4.5rem] relative border-y border-y-gray-400 cursor-pointer  pl-5 md:pl-0 w-full",
          connectionActive === connection
            ? "bg-gray-80 border-l border-[#073A4A] "
            : ""
        )}
        onClick={onMessage}
      >
        <div className="flex gap-5 w-full">
          <UserCard user={filteredUser} />
          <div className="overflow-hidden">
            <h2 className="font-poppins font-semibold capitalize">
              {filteredUser.username}
            </h2>
            {previewMessage ? (
              <p className="font-poppins font-normal text-[14px] flex gap-0.5 w-full max-w-full">
                <span className="flex flex-1 text-gray-900 max-w-[120px] pp:max-w-[220px] p:max-w-[250px] truncate">
                  {previewMessage?.content_type === "Text" &&
                  previewMessage.content.length > 20
                    ? `${previewMessage.content.substring(0, 20)}...`
                    : previewMessage?.content}
                  {previewMessage?.content_type === "Image" && (
                    <div className="flex gap-1 ml-1">
                      <Image
                        src="/assets/photo2.svg"
                        alt="Foto prévia"
                        width={32}
                        height={32}
                        className="w-5 h-5"
                      />
                      Foto
                    </div>
                  )}
                  {previewMessage?.content_type === "Audio" && (
                    <div className="flex gap-1 ml-1">
                      <Image
                        src="/assets/mic.svg"
                        alt="Preview audio"
                        width={32}
                        height={32}
                        className="w-3 h-4"
                      />
                      Audio
                    </div>
                  )}
                </span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        {previewMessage ? (
          <span className="ml-5 font-poppins text-gray-500 text-[14px] font-medium absolute right-2 top-2">
            {formatarHora(previewMessage?.sent_at)}
          </span>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return null;
  }
}
