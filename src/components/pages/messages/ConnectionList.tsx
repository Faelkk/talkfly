"use client";

import ConnectionUser from "./ConnectionUser";
import { useMessage } from "@/context/messageContext";
import NoConnectionsFilter from "./NoConnectionsFilter";
import { useConnec } from "@/context/connecContext";

export default function ConnectionsList() {
  const {
    previewMessage,
    setPreviewMessage,
    setUserMessage,
    setUsernames,
    setIsMessageOpen,
  } = useMessage();

  const {
    connection,
    connectionActive,
    filteredConnections,
    setConnectionActive,
    setUsers,
  } = useConnec();

  if (filteredConnections && filteredConnections.length === 0) {
    return <NoConnectionsFilter />;
  }

  return (
    <div>
      {connection?.map((conn, index) => (
        <ConnectionUser
          connection={conn}
          previewMessage={previewMessage}
          setPreviewMessage={setPreviewMessage}
          filteredConnections={filteredConnections}
          key={index}
          setUsers={setUsers}
          setIsMessageOpen={setIsMessageOpen}
          connectionActive={connectionActive!}
          onClickMessage={setConnectionActive}
          setUserMessage={setUserMessage}
          setUsernames={setUsernames}
        />
      ))}
    </div>
  );
}
