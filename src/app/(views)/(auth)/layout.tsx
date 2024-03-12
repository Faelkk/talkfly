import AuthImage from "@/components/auth/auth-image";
import Container from "@/components/container/container";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Container className="h-[100vh]  flex items-center">
      <div className="flex w-full justify-center xl:gap-[120px] ">
        {children}
        <AuthImage />
      </div>
    </Container>
  );
}
