import { onLogout } from "@/actions/auth/logout";
import { useUser } from "@/context/userContext";
import { useOutsideClick } from "@/hooks/useOutsideClick";

import Image from "next/image";

import { useRef } from "react";

interface DropdownProps {
  onToggle: () => void;
  onToggleDropdown: () => void;
}

export default function Dropdown({
  onToggle,
  onToggleDropdown,
}: DropdownProps) {
  const { setUser } = useUser();
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, onToggleDropdown);

  async function handleLogout() {
    onToggleDropdown();
    await onLogout();
    setUser(null);
  }

  return (
    <div
      className="absolute top-8 left-0 bg-gray-50 shadow p-2 rounded w-32  flex mt-4 z-10"
      ref={dropdownRef}
    >
      <div className="flex flex-col w-full items-start gap-2">
        <button
          className="flex justify-between items-center w-full hover:bg-gray-80 rounded p-2"
          onClick={onToggle}
        >
          <span className="font-dmSans font-normal text-gray-800">Perfil</span>
          <Image
            src="/assets/user-icon.svg"
            alt="Clique para ir ao perfil"
            className="w-3 h-3 md:w-4 md:h-4  "
            width={64}
            height={64}
          />
        </button>
        <button
          className="flex justify-between items-center w-full hover:bg-gray-80 rounded p-2"
          onClick={handleLogout}
        >
          <span className="font-dmSans font-normal text-gray-800">Sair</span>
          <Image
            src="/assets/logout.svg"
            alt="Clique para sair"
            className="w-3 h-3 md:w-4 md:h-4  "
            width={64}
            height={64}
          />
        </button>
      </div>
    </div>
  );
}
