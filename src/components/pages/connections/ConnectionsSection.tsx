"use client";

import Connections from "./Connections";
import ConnectionsEmpty from "./ConnectionsEmpty";
import { useConnec } from "@/context/connecContext";

export default function ConnectionsSection() {
  const { connection } = useConnec();

  return (
    <>
      {Array.isArray(connection) && connection.length ? (
        <Connections connections={connection} />
      ) : (
        <ConnectionsEmpty />
      )}
    </>
  );
}
