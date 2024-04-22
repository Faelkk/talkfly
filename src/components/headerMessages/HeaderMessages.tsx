"use client";

import Image from "next/image";
import Link from "next/link";
import InputConnections from "../InputConnections/InputConnections";
import { useInput } from "@/hooks/useInput";

export default function HeaderMessages() {
  const { handleInput, isOpenInput } = useInput();
  return (
    <>
      <header className="flex md:gap-10 mt-5 border-b border-gray-400 pb-5 justify-between h-[3rem]">
        {isOpenInput ? (
          <InputConnections onToggle={handleInput} />
        ) : (
          <>
            <span className="font-poppins font-semibold text-[18px] ml-5">
              Mensagens{" "}
            </span>
            <div className="flex items-center gap-5 mr-5">
              <Link href="/connections">
                <Image
                  src="/assets/add-more.svg"
                  width={32}
                  height={32}
                  className="h-4 w-4"
                  alt="Adicionar contato"
                />
              </Link>
              <button onClick={handleInput} className="cursor-pointer">
                <Image
                  src="/assets/search.svg"
                  width={32}
                  height={32}
                  className="h-4 w-4"
                  alt="Procurar contato"
                />
              </button>
            </div>{" "}
          </>
        )}
      </header>
    </>
  );
}
