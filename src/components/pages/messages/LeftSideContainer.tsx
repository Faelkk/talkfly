"use client";

import { useMessage } from "@/context/messageContext";
import { cn } from "@/functions/cn";
import { ReactNode } from "react";

export default function LeftSideContainer({
  children,
}: {
  children: ReactNode;
}) {
  const { messageIsOpen } = useMessage();

  return (
    <div
      className={cn(
        "w-full md:w-[400px] flex  flex-col h-full border-r border-gray-400 ",
        messageIsOpen ? "hidden md:flex" : "flex"
      )}
    >
      {children}
    </div>
  );
}
