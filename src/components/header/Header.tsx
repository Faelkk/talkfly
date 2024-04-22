"use client";

import Link from "next/link";

import Image from "next/image";
import Container from "../Container/container";
import EditUserModal from "../modal/editUserModal/editUserModal";
import { useToggle } from "@/hooks/useToggle";
import { useDropdown } from "@/hooks/useDropdown";

import { useUser } from "@/context/userContext";
import UserCard from "../helpers/user-card";
import { cn } from "@/functions/cn";
import { usePathname } from "next/navigation";
import Logo from "../helpers/logo";
import Dropdown from "../Dropdown/DropdownHead/Dropdown";

export default function Header() {
  const { isOpen, handleToggle } = useToggle();

  const { isDropdownOpen, handleToggleDropdown } = useDropdown();
  const { user } = useUser();

  const pathname = usePathname();

  return (
    <>
      <header className="p-5 bg-gray-50  shadow-sm">
        <Container className="flex max-w-[95rem]">
          <nav className="flex items-center justify-center p:justify-between w-full">
            <Logo className="w-16 p:w-24 h-12 hidden p:block" />
            <div className=" flex gap-8 pp:gap-10 items-center ">
              <ul className="flex gap-4 pp:gap-10 ">
                <li className="">
                  <Link
                    href="/home"
                    className={cn(
                      "flex items-center gap-[10px] font-poppins  font-medium   pb-2",
                      pathname === "/home" ? "border-b-2 border-black " : ""
                    )}
                  >
                    <Image
                      src="/assets/message-icon.svg"
                      alt="Icone de conexões"
                      className="w-3 h-3 pp:w-5 pp:h-5 md:w-4 md:h-4"
                      width={64}
                      height={64}
                    />
                    <span className="hidden md:block"> Messages</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/connections"
                    className={cn(
                      "flex items-center gap-[10px] font-poppins  font-medium  pb-2",
                      pathname === "/connections"
                        ? "border-b-2 border-black"
                        : ""
                    )}
                  >
                    <Image
                      src="/assets/user-icon.svg"
                      alt="Icone de conexões"
                      className="w-3 h-3 pp:w-5 pp:h-5 md:w-4 md:h-4"
                      width={64}
                      height={64}
                    />
                    <span className="hidden md:block"> Conexões</span>
                  </Link>
                </li>
              </ul>

              <div
                className="flex items-center gap-[10px] relative cursor-pointer  pb-2"
                onClick={handleToggleDropdown}
              >
                <UserCard user={user} />
                <div className="items-center gap-[8px]  flex">
                  <span className=" font-poppins font-medium capitalize">
                    {user?.username}
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
              </div>
            </div>
          </nav>
        </Container>
      </header>

      {isOpen ? <EditUserModal onToggle={handleToggle} /> : ""}
    </>
  );
}
