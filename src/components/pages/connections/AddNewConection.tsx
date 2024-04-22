"use client";

import { ChangeEvent, useEffect, useState } from "react";
import addConnection from "@/actions/connections/addConnection";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import ErrorMessage from "@/components/helpers/error-message";
import { io } from "socket.io-client";

import { useSolicitation } from "@/context/solicitationContext";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button
          className="font-poppins font-medium text-[16px] bg-purple-200  text-gray-50 p-3 w-full rounded p:w-[18rem] "
          disabled={pending}
        >
          Enviando...
        </button>
      ) : (
        <button
          className="font-poppins font-medium text-[16px] bg-purple-200  text-gray-50 p-3 w-full rounded p:w-[18rem] "
          disabled={pending}
        >
          Enviar
        </button>
      )}
    </>
  );
}

export default function AddNewConnection() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const { solicitation, setSolicitation, setSolicitationUser } =
    useSolicitation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData();

    fd.append("username", username);

    const { error, ok } = await addConnection(fd);

    setUsername("");
    if (error) {
      setError(error);
      toast.error("Erro ao enviar solicitação");
    }

    if (ok) {
      toast.success("Solicitação enviada com sucesso");
    }
  };

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value.toLowerCase());
  }

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("invite@rejected", (inviteRejected) => {
      setSolicitationUser((prevSolicitation) =>
        prevSolicitation?.filter(
          (solicitation) => solicitation.id !== inviteRejected.inviteExists.id
        )
      );
      setSolicitation((prevSolicitation) =>
        prevSolicitation?.filter(
          (solicitation) => solicitation.id !== inviteRejected.inviteExists.id
        )
      );
    });

    socket.on("invite@cancel", (inviteRejected) => {
      setSolicitationUser((prevSolicitation) =>
        prevSolicitation?.filter(
          (solicitation) => solicitation.id !== inviteRejected.inviteExists.id
        )
      );
      setSolicitation((prevSolicitation) =>
        prevSolicitation?.filter(
          (solicitation) => solicitation.id !== inviteRejected.inviteExists.id
        )
      );
    });

    return () => {
      socket.disconnect();
    };
  }, [solicitation]);

  return (
    <section className="flex flex-col w-full mt-10">
      <h2 className="font-poppins text-[32px] font-semibold">Fazer conexão</h2>
      <div className=" mt-5">
        <form
          className="flex flex-col md:flex-row justify-between w-full gap-10"
          onSubmit={handleSubmit}
        >
          <div className="flex border-black border  rounded flex-1  bg-gray-50  justify-between items-center p-4 h-[60px]">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              className="font-dmSans placeholder:text-black text-[18px] w-full  "
              placeholder="Nome de usuario"
              onChange={handleUsernameChange}
            />
            <label htmlFor="username">
              <Image
                src="/assets/search.svg"
                width={40}
                height={40}
                className="h-5 w-5"
                alt="Enviar solicitação"
              />
            </label>
          </div>
          <FormButton />
        </form>

        <ErrorMessage error={error} />
      </div>
    </section>
  );
}
