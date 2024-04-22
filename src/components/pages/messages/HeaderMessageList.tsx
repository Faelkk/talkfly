"use client";

import DropdownMessage from "@/components/Dropdown/DropdownMessage/DropdownMessage";
import InputSearchModal from "@/components/modal/inputSearchModal/InputSearchModal";

import { useInput } from "@/hooks/useInput";
import Image from "next/image";
import UserMessage from "./UserMessage";
import { useMessage } from "@/context/messageContext";
import { useEffect } from "react";
import { useConnec } from "@/context/connecContext";
import { useConnectionId } from "@/functions/getConnectionId";
import getUserById from "@/actions/user/getUserById";

export default function HeaderMessageList() {
  const { handleInput, isOpenInput } = useInput();
  const { userMessage, messageIsOpen, setIsMessageOpen, setUserMessage } =
    useMessage();
  const { connectionActive } = useConnec();

  const connectionId = useConnectionId({ connection: connectionActive });

  const handleFetchUser = async () => {
    const { data } = await getUserById(connectionId);

    setUserMessage(data);
  };
  useEffect(() => {
    handleFetchUser();
  }, []);

  return (
    <>
      <header className="mt-5  border-b-2 border-gray-400 h-[3.063rem] ">
        <section className="mx-2 pb-3 flex   justify-between md:mx-5">
          <div className="flex gap-4">
            {messageIsOpen ? (
              <button
                onClick={() => setIsMessageOpen(false)}
                className="md:hidden"
              >
                <Image
                  src="/assets/arrow-back.svg"
                  width={32}
                  height={32}
                  className="w-4 h-4"
                  alt="Clique para voltar"
                />
              </button>
            ) : (
              ""
            )}

            <div className="flex items-center gap-5 ">
              <UserMessage user={userMessage} />
              <h2 className="font-poppins text-[18px] font-medium capitalize">
                {userMessage?.username}{" "}
              </h2>
            </div>
          </div>

          <button className="flex  gap-5 md:gap-10 items-center relative">
            <Image
              src="/assets/search.svg"
              width={40}
              height={40}
              className="w-4 h-4 md:w-5 md:h-5"
              alt="Procure uma mensagem"
              onClick={handleInput}
            />
            <DropdownMessage />
          </button>
        </section>
      </header>

      {isOpenInput ? <InputSearchModal onToggle={handleInput} /> : ""}
    </>
  );
}
