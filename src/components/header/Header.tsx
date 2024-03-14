import Link from "next/link";
import Logo from "../Logo/logo";
import Image from "next/image";
import Container from "../container/container";
import EditUserModal from "../editUserModal/page";

export default function Header() {
  const isModalopen = false;

  return (
    <>
      <header className="p-5 bg-gray-50  shadow-sm">
        <Container className="flex max-w-[85rem]">
          <nav className="flex items-center justify-center pp:justify-between w-full">
            <Logo className="w-16 pp:w-24 h-12 hidden pp:block" />
            <div className="hidden gap-10 items-center md:flex">
              <ul className="flex gap-10 ">
                <li>
                  <Link
                    href="/home"
                    className="flex items-center gap-[10px] font-poppins  font-medium"
                  >
                    <Image
                      src="/assets/message-icon.svg"
                      alt="Icone de conexões"
                      className="w-4 h-4 "
                      width={64}
                      height={64}
                    />
                    Messages
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
                      className="w-4 h-4 "
                      width={64}
                      height={64}
                    />
                    Conexões
                  </Link>
                </li>
              </ul>

              <button className="flex items-center gap-[10px]">
                <div className="h-8 w-8 bg-black rounded-full"> </div>
                <div className="flex items-center gap-[8px] ">
                  <span className=" font-poppins font-medium">Nome</span>
                  <Image
                    src="/assets/arrow-down.svg"
                    width={32}
                    className="w-2 h-[5px]"
                    height={32}
                    alt="Icone para ver mais sobre usuario"
                  />
                </div>
              </button>
            </div>

            <div className="flex gap-10 items-center md:hidden">
              <ul className="flex gap-10 ">
                <li>
                  <Link href="/home" className="flex items-center gap-[10px]">
                    <Image
                      src="/assets/message-icon.svg"
                      alt="Icone de messages"
                      className="w-5 h-5"
                      width={64}
                      height={64}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/connections"
                    className="flex items-center gap-[10px]"
                  >
                    <Image
                      src="/assets/user-icon.svg"
                      alt="Icone de perfil"
                      className="w-5 h-5"
                      width={64}
                      height={64}
                    />
                  </Link>
                </li>
              </ul>

              <button className="flex items-center gap-[10px]">
                <div className="h-8 w-8 bg-black rounded-full"> </div>
                <div className="flex items-center gap-[8px] ">
                  <Image
                    src="/assets/arrow-down.svg"
                    width={32}
                    className="w-2 h-[5px]"
                    height={32}
                    alt="Icone para ver mais sobre usuario"
                  />
                </div>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {isModalopen ? <EditUserModal /> : ""}
    </>
  );
}
