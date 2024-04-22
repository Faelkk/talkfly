import Image from "next/image";
import Link from "next/link";

export default function MessagesNoContent() {
  return (
    <div className="hidden flex-1 md:flex items-center flex-col justify-center h-full">
      <Image
        priority
        src="/illustrations/start-message.svg"
        alt="Icone iniciar mensagem"
        width={600}
        height={600}
        className="h-[18.75rem] w-[18.75rem]"
      />
      <span className="font-dmSans lg:text-[18px] mt-16 my-8 w-80 text-center md:w-full px-4">
        Envie uma mensagem para alguém e comece a conversar!
      </span>

      <Link
        href="/connections"
        className="font-poppins font-semibold text-[18px] bg-purple-200 uppercase text-gray-50 p-3 rounded w-[20rem] tracking-wider text-center"
      >
        Enviar mensagem
      </Link>
    </div>
  );
}
