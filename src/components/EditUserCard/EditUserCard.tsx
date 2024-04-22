import { User } from "@/context/userContext";
import Image from "next/image";

export default function EditUserCard({ user }: { user: User | null }) {
  const userIcon = user?.icon ? true : false;
  return userIcon ? (
    <Image
      src={user?.icon!}
      className="w-16 h-16  rounded-full "
      width={256}
      height={256}
      alt="Foto de perfil"
    ></Image>
  ) : (
    <div className="h-16 w-16 rounded-full bg-gray-400 hidden pp:flex  items-center justify-center">
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
