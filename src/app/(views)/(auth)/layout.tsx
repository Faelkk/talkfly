import Container from "@/components/Container/container";
import AuthImage from "@/components/pages/auth/auth-image";
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
