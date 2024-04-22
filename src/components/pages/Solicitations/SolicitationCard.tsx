"use client";

import { SolicitationsData } from "@/actions/solicitations/acceptSolicitation";

import getUserById from "@/actions/user/getUserById";
import BtnCancelSolicitation from "./BtnCancelSolicitation";
import UserCard from "@/components/helpers/user-card";
import { useEffect, useState } from "react";
import { User } from "@/context/userContext";

export default function SolicitationCard({
  solicitation,
}: {
  solicitation: SolicitationsData;
}) {
  const [solicitationData, setSolicitationData] = useState<User | null>(null);

  async function handleFetchCard() {
    const { data } = await getUserById(solicitation.receiver_id);
    setSolicitationData(data);
  }

  useEffect(() => {
    handleFetchCard();
  }, []);

  return (
    <div className="bg-gray-200 rounded-2   flex md:items-center justify-between   p:flex-row  p:h-[4.375rem] mb-4 p-3 shadow-sm ">
      <div className="flex gap-[20px]">
        {" "}
        <UserCard user={solicitationData} />
        <div className="flex flex-col">
          <h2 className="font-poppins font-medium  text-[16px] p2:text-[18px] ">
            {solicitationData?.username}
          </h2>
          <span className="text-gray-600 text-[12px] font-poppins font-medium p:hidden p2:block">
            Pedido de conexão enviada
          </span>
        </div>
      </div>
      <BtnCancelSolicitation solicitationId={solicitation.id} />
    </div>
  );
}
