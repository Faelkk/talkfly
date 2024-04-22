"use client";

import { useMessage } from "@/context/messageContext";
import { cn } from "@/functions/cn";
import { ReactNode } from "react";

export default function MessageContentContainer({
  children,
}: {
  children: ReactNode;
}) {
  const { messageIsOpen } = useMessage();

  return (
    <div
      className={cn(
        "flex flex-col h-full relative",
        messageIsOpen === false ? "hidden md:flex" : "flex"
      )}
    >
      {children}
    </div>
  );
}
