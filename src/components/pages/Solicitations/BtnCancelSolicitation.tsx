"use client";

import Image from "next/image";

import { useToggle } from "@/hooks/useToggle";
import CancelSolicitationModal from "@/components/modal/cancelSolicitationModal/cancelSolicitationModal";

export default function BtnCancelSolicitation({
  solicitationId,
}: {
  solicitationId: string;
}) {
  const { isOpen, handleToggle } = useToggle();

  return (
    <>
      <button className="flex md:mr-5 gap-4  " onClick={() => handleToggle()}>
        <Image
          src="/assets/close-circle.svg"
          width={24}
          height={24}
          alt="Cancelar solicitação"
        />
      </button>
      {isOpen ? (
        <CancelSolicitationModal
          onToggle={handleToggle}
          solicitationId={solicitationId}
        />
      ) : (
        ""
      )}
    </>
  );
}
