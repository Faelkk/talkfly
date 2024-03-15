import Header from "@/components/header/Header";
import { ReactNode } from "react";
import getUser from "@/actions/user/getUser";
import { UserContextProvider } from "@/context/userContext";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { data, error, ok } = await getUser();

  return (
    <UserContextProvider user={data}>
      <div className="">
        <Header />
        {children}
      </div>
    </UserContextProvider>
  );
}
