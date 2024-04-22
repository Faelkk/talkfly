import { useDropdown } from "@/hooks/useDropdown";
import Image from "next/image";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRef } from "react";
import { useToggle } from "@/hooks/useToggle";
import DeleteMessageModal from "@/components/modal/deleteMessageModal/DeleteMessageModal";

export default function DropdownMessage() {
  const { isOpen, handleToggle } = useToggle();
  const { isDropdownOpen, handleToggleDropdown } = useDropdown();
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, handleToggleDropdown);

  return (
    <>
      <div className="p-3 cursor-pointer" onClick={handleToggleDropdown}>
        <Image
          src="/assets/3-points.svg"
          alt="Mais sobre"
          width={22}
          height={22}
          className="w-1 h-4  md:h-5"
        />

        {isDropdownOpen ? (
          <div
            className="absolute right-0 top-5 bg-gray-50 shadow p-2 rounded w-40  flex mt-2 z-10"
            ref={dropdownRef}
          >
            <div className="flex flex-col w-full items-start gap-2">
              <button
                className=" w-full hover:bg-gray-80 rounded p-2"
                onClick={handleToggle}
              >
                Limpar conversa
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {isOpen ? <DeleteMessageModal onToggle={handleToggle} /> : ""}
    </>
  );
}
