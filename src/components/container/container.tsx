import { ReactNode } from "react";
import { cn } from "@/functions/cn";

export default async function Container({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <section className={cn("max-w-[75rem] px-4 mx-auto", className)}>
      {children}
    </section>
  );
}
