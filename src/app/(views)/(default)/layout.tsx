import Header from "@/components/header/Header";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}
