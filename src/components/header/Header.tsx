"use client";

import Link from "next/link";
import Logo from "../Logo/logo";
import Image from "next/image";
import Container from "../container/container";
import EditUserModal from "../editUserModal/page";
import { useToggle } from "@/hooks/useToggle";
import { useDropdown } from "@/hooks/useDropdown";
import Dropdown from "../dropdown/Dropdown";
import { useUser } from "@/context/userContext";

export default function Header() {
  const { isOpen, handleToggle } = useToggle();
  const { isDropdownOpen, handleToggleDropdown } = useDropdown();
  const { user } = useUser();

  return (
    <>
      <header className="p-5 bg-gray-50  shadow-sm">
        <Container className="flex max-w-[85rem]">
          <nav className="flex items-center justify-center pp:justify-between w-full">
            <Logo className="w-16 pp:w-24 h-12 hidden pp:block" />
            <div className=" flex gap-10 items-center ">
              <ul className="flex gap-10 ">
                <li>
                  <Link
                    href="/home"
                    className="flex items-center gap-[10px] font-poppins  font-medium"
                  >
                    <Image
                      src="/assets/message-icon.svg"
                      alt="Icone de conexões"
                      className="w-5 h-5 md:w-4 md:h-4"
                      width={64}
                      height={64}
                    />
                    <span className="hidden md:block"> Messages</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/connections"
                    className="flex items-center gap-[10px] font-poppins  font-medium"
                  >
                    <Image
                      src="/assets/user-icon.svg"
                      alt="Icone de conexões"
                      className="w-5 h-5 md:h-4 md:w-4 "
                      width={64}
                      height={64}
                    />
                    <span className="hidden md:block"> Conexões</span>
                  </Link>
                </li>
              </ul>

              <button
                className="flex items-center gap-[10px] relative"
                onClick={handleToggleDropdown}
              >
                <div className="h-8 w-8 bg-black rounded-full"> </div>
                <div className=" items-center gap-[8px] hidden md:flex">
                  <span className=" font-poppins font-medium capitalize">
                    {user?.name}
                  </span>
                  <Image
                    src="/assets/arrow-down.svg"
                    width={32}
                    className="w-2 h-[5px]"
                    height={32}
                    alt="Icone para ver mais sobre usuario"
                  />
                </div>

                {isDropdownOpen ? (
                  <Dropdown
                    onToggle={handleToggle}
                    onToggleDropdown={handleToggleDropdown}
                  />
                ) : (
                  ""
                )}
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {isOpen ? <EditUserModal onToggle={handleToggle} /> : ""}
    </>
  );
}
