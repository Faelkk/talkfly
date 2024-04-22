import DeleteIcon from "@/components/icons/delete";
import Image from "next/image";
import { cancelSolicitation } from "@/actions/solicitations/cancelSolicitation";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function CancelSolicitationModal({
  onToggle,
  solicitationId,
}: {
  onToggle: () => void;
  solicitationId: string;
}) {
  const modalRef = useRef(null);

  async function handleRecuse(solicitationId: string) {
    const data = await cancelSolicitation(solicitationId);
    if (!data) {
      toast.error("Erro ao cancelar solicitação");
    } else {
      toast.success("Solicitação cancelada com sucesso");
    }

    onToggle();
  }

  useOutsideClick(modalRef, onToggle);

  return (
    <aside className="fixed inset-0 flex items-center justify-center bg-[#111B21]/50 z-10 backdrop-blur-md">
      <section
        className="bg-gray-250 w-[90%] p:w-full max-w-[25rem] p-3 rounded flex flex-col items-center relative shadow-sm"
        ref={modalRef}
      >
        <header className="h-12 flex items-center justify-center text-gray-800 w-full">
          <h2 className="text-lg tracking-[-1px] font-bold font-dmSans">
            Cancelar
          </h2>

          <button
            className="w-12 h-12 flex items-center justify-center outline-none absolute right-0 top-3"
            onClick={() => onToggle()}
          >
            {" "}
            <Image
              src="/assets/close.svg"
              alt="Fechar o modal"
              width={32}
              height={32}
              className="h-6 w-6"
            />
          </button>
        </header>
        <div className="flex flex-col items-center text-center gap-6 mt-10">
          <div className="w-[52px] h-[52px] rounded-full bg-red-50 flex justify-center items-center">
            <DeleteIcon />
          </div>
          <span className="font-dmSans w-[180px] text-gray-800 font-bold tracking-[-0.5px]">
            Tem certeza que deseja excluir essa conta?
          </span>
          <p className="font-dmSans tracking-[-0.5px] text-gray-800">
            Ao cancelar a solicitação, não sera possivel desfazer essa ação,
            apenas refazendo a solicitação.
          </p>
        </div>
        <div className="flex w-full flex-col space-y-4 mt-10">
          <button
            className="font-dmSans bg-red-600 text-gray-50 rounded-2xl px-6 h-12"
            onClick={() => handleRecuse(solicitationId)}
          >
            Sim, tenho certeza
          </button>
          <button
            className="font-dmSans border-black border rounded-2xl px-6 h-12"
            onClick={() => onToggle()}
          >
            Cancelar
          </button>
        </div>
      </section>
    </aside>
  );
}
