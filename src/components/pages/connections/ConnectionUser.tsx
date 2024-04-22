"use client";

import Link from "next/link";

import { ConnectionData } from "@/actions/connections/getConnections";
import getUserById from "@/actions/user/getUserById";
import { useConnectionId } from "@/functions/getConnectionId";
import { useEffect, useState } from "react";
import { User } from "@/context/userContext";
import UserCard from "@/components/helpers/user-card";
import DropdownConnection from "@/components/Dropdown/DropdownConnection/DropdownConnection";

export default function ConnectionUser({
  connection,
}: {
  connection: ConnectionData;
}) {
  const connectionId = useConnectionId({ connection });
  const [loading, setLoading] = useState(false);

  const [connectionData, setConnection] = useState<User | null>(null);
  const handleFetchUser = async () => {
    setLoading(true);
    const { data } = await getUserById(connectionId);
    setConnection(data);
    setLoading(false);
  };

  useEffect(() => {
    handleFetchUser();
  }, []);

  if (loading) return <p>carregando...</p>;
  if (connectionData)
    return (
      <div className="mt-5">
        <div className="rounded flex-col flex md:items-center justify-between p:flex-row h-[8rem]  p:h-[4.375rem] p-3 border border-gray-600 bg-gray-50 relative">
          <div className="flex gap-[20px] items-center">
            <UserCard user={connectionData} />
            <div className="flex flex-col">
              <h2 className="font-poppins font-medium text-[16px] p2:text-[18px] capitalize">
                {connectionData?.username}
              </h2>
              <span className="text-gray-600 text-[12px] font-poppins font-medium p:hidden p2:block"></span>
            </div>

            <DropdownConnection connection={connection} />
          </div>

          <Link
            href="/home"
            className="p-2 w-full border border-gray-600 rounded bg-black text-gray-50 font-poppins p:w-[14rem] uppercase mr-10 text-center"
          >
            Enviar mensagem
          </Link>
        </div>
      </div>
    );
}
