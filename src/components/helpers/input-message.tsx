import { useMessage } from "@/context/messageContext";
import { ChangeEvent } from "react";

export default function InputMessage() {
  const { messageFilterValue, setMessageFilterValue } = useMessage();

  function handleChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setMessageFilterValue(event.target.value.toLowerCase());
  }

  return (
    <header className="mt-1">
      <form className="flex items-center justify-between w-full">
        <input
          value={messageFilterValue}
          onChange={handleChangeSearch}
          type="text"
          placeholder="Pesquisar"
          className="bg-transparent  placeholder:text-gray-700 text-[16px] font-dmSans flex-1 mx-5  border border-black p-2 rounded-[5px] w-full "
        />
      </form>
    </header>
  );
}
