"use client";

import { useDropdown } from "@/hooks/useDropdown";
import Image from "next/image";
import { ConnectionData } from "@/actions/connections/getConnections";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRef } from "react";
import { useToggle } from "@/hooks/useToggle";
import DeleteConnectionModal from "@/components/modal/deleteConnectionModal/deleteConnectionModal";

export default function DropdownConnection({
  connection,
}: {
  connection: ConnectionData;
}) {
  const { isOpen, handleToggle } = useToggle();
  const { isDropdownOpen, handleToggleDropdown } = useDropdown();
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, handleToggleDropdown);

  return (
    <>
      <div
        className="absolute right-5  p-3 cursor-pointer"
        onClick={handleToggleDropdown}
      >
        <Image
          src="/assets/3-points.svg"
          alt="Mais sobre"
          width={22}
          height={22}
          className="h-4 w-1 "
        />

        {isDropdownOpen ? (
          <div
            className="absolute right-0 top-5 bg-gray-50 shadow p-2 rounded w-40  flex mt-2 z-10"
            ref={dropdownRef}
          >
            <div className="flex flex-col w-full items-start gap-2">
              <button
                className=" w-full hover:bg-gray-80 rounded p-2"
                onClick={() => handleToggle()}
              >
                Remover conexão
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {isOpen ? (
        <DeleteConnectionModal
          onToggle={handleToggle}
          connectionId={connection.id}
        />
      ) : (
        ""
      )}
    </>
  );
}
