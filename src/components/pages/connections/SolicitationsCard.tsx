"use client";

import { acceptSolicitation } from "@/actions/solicitations/acceptSolicitation";
import { recuseSolicitation } from "@/actions/solicitations/recuseSolicitation";
import { SolicitationsData } from "@/actions/solicitations/solicitations";
import getUserById from "@/actions/user/getUserById";
import UserCard from "@/components/helpers/user-card";

import { User } from "@/context/userContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface SolicitationsCardProps {
  solicitation: SolicitationsData;
}

export default function SolicitationsCard({
  solicitation,
}: SolicitationsCardProps) {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  async function handleFetchUserInfo() {
    const { data } = await getUserById(solicitation.sender_id);
    setUserInfo(data);
  }

  async function handleAccept(solicitationId: string) {
    const data = await acceptSolicitation(solicitationId);

    if (data) {
      toast.success("Solicitação aceitada com sucesso");
    } else {
      toast.success("Erro ao aceitar solicitação");
    }
  }

  async function handleRefuse(solicitationId: string) {
    const data = await recuseSolicitation(solicitationId);

    if (data) {
      toast.success("Solicitação recusada com sucesso");
    } else {
      toast.success("Erro ao recusar solicitação");
    }
  }

  useEffect(() => {
    handleFetchUserInfo();
  }, [solicitation]);

  return (
    <div
      className="bg-gray-200 rounded-2 flex-col flex md:items-center justify-between h-[8rem] p:flex-row p:h-[4.375rem] mb-4 p-3 shadow-sm"
      key={solicitation.id}
    >
      <div className="flex gap-[20px]">
        <UserCard user={userInfo} />
        <div className="flex flex-col">
          <h2 className="font-poppins font-medium text-[16px] p2:text-[18px]">
            {userInfo?.username}
          </h2>
          <span className="text-gray-600 text-[12px] font-poppins font-medium p:hidden p2:block">
            Pedido de conexão recebido
          </span>
        </div>
      </div>
      <div className="flex md:mr-5 gap-4">
        <button
          className="p-2 w-[9rem] p:w-[7rem] p2:w-[8rem] rounded border bg-gray-50 border-gray-600 font-medium font-poppins"
          onClick={() => handleRefuse(solicitation.id)}
        >
          Recusar
        </button>
        <button
          className="bg-black text-gray-50 w-[9rem] font-medium p-2 p:w-[7rem] p2:w-[8rem] rounded"
          onClick={() => handleAccept(solicitation.id)}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
