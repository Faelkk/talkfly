"use client";

import React from "react";
import MessagesContent from "./MessagesContent";
import MessagesNoContent from "./MessagesNoContent";
import { useConnec } from "@/context/connecContext";

export default function MessagesSide() {
  const { connectionActive, connection } = useConnec();

  return (
    <>
      {connectionActive && connection && connection.length > 0 ? (
        <MessagesContent />
      ) : (
        <MessagesNoContent />
      )}
    </>
  );
}
