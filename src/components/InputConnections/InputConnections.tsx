"use client";

import { useConnec } from "@/context/connecContext";
import Image from "next/image";
import { ChangeEvent } from "react";

export default function InputConnections({
  onToggle,
}: {
  onToggle: () => void;
}) {
  const { inputValue, setInputValue } = useConnec();

  function handleChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value.toLowerCase());
  }

  function handleClear(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setInputValue("");
  }

  function handleToggle() {
    setInputValue("");
    onToggle();
  }

  return (
    <form className="flex h-10  gap-4 w-full mx-5 rounded-md bg-gray-350 ">
      <button className="ml-2" onClick={handleToggle}>
        <Image
          src="/assets/arrow-back.svg"
          width={32}
          height={32}
          className="h-4 w-4"
          alt="Procurar contato"
        />
      </button>
      <input
        type="text"
        placeholder="Pesquisar"
        className="placeholder:text-black text-gray-900 font-poppins text-[16px]  p-2 bg-transparent  flex-1"
        value={inputValue}
        onChange={handleChangeSearch}
      />
      {inputValue.length > 0 ? (
        <button className="mr-2">
          <Image
            onClick={(event) => handleClear(event as any)}
            src="/assets/close.svg"
            width={32}
            height={32}
            className="h-4 w-4"
            alt="Procurar contato"
          />
        </button>
      ) : (
        ""
      )}
    </form>
  );
}
