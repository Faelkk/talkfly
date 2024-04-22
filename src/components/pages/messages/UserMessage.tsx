import { User } from "@/context/userContext";
import Image from "next/image";

export default function UserMessage({ user }: { user: User | null }) {
  const userIcon = user?.icon ? true : false;
  return userIcon ? (
    <Image
      src={user?.icon!}
      className="h-7 w-7 rounded-full  object-cover object-center hidden pp:flex"
      width={256}
      height={256}
      alt="Foto de perfil"
    ></Image>
  ) : (
    <div className="h-8 w-8 rounded-full bg-gray-400 hidden pp:flex  items-center justify-center">
      <Image
        src="/assets/user.svg"
        width={32}
        height={32}
        alt="Foto de perfil"
        className="w-6 h-6"
      />
    </div>
  );
}
