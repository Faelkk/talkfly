import Header from "@/components/Header/Header";
import { ReactNode } from "react";
import getUser from "@/actions/user/getUser";
import { UserContextProvider } from "@/context/userContext";
import { Toaster } from "react-hot-toast";

import { getConnection } from "@/actions/connections/getConnections";
import { ConnecContextProvider } from "@/context/connecContext";
import SocketComponent from "@/components/SocketComponent/SocketComponent";
import { SolicitationContextProvider } from "@/context/solicitationContext";
import { solicitations } from "@/actions/solicitations/solicitations";
import { Message } from "@/context/messageContext";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { data } = await getUser();
  const { data: SolicitationData } = await solicitations();
  const connections = await getConnection();

  return (
    <UserContextProvider user={data}>
      <div className="">
        <Header />
        <SolicitationContextProvider solicitation={SolicitationData}>
          <ConnecContextProvider connection={connections as Message[]}>
            {children}
            <SocketComponent />
          </ConnecContextProvider>
        </SolicitationContextProvider>
        <Toaster />
      </div>
    </UserContextProvider>
  );
}
