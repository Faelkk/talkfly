import { User } from "@/context/userContext";
import Image from "next/image";

export default function UserCard({ user }: { user: User | null }) {
  const userIcon = user?.icon ? true : false;
  return userIcon ? (
    <Image
      src={user?.icon!}
      className="w-8 h-8 pp:h-[2.8rem] pp:w-[2.8rem] rounded-full md:ml-5 object-cover object-center"
      width={256}
      height={256}
      alt="Foto de perfil"
    ></Image>
  ) : (
    <div className="h-[2rem] md:h-[2.5rem] w-[2rem] md:w-[2.5rem] rounded-full bg-gray-400 hidden pp:flex  items-center justify-center md:ml-5">
      <Image
        src="/assets/user.svg"
        width={32}
        height={32}
        alt="Foto de perfil"
        className="w-[1.5rem] h-[1.5rem]"
      />
    </div>
  );
}
