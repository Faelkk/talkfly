"use client";

import Messages from "@/components/pages/messages/Messages";
import MessagesNoConnections from "@/components/pages/messages/MessagesNoConnections";
import { useConnec } from "@/context/connecContext";

export default function MessagesSection() {
  const { connection } = useConnec();
  return (
    <>
      {Array.isArray(connection) && connection.length > 0 ? (
        <Messages />
      ) : (
        <MessagesNoConnections />
      )}
    </>
  );
}
