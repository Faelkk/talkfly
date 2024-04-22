import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-10 font-poppins text-2xl">Pagina não encontrada</h2>
        <Image
          src="/illustrations/not-found.svg"
          width={600}
          height={600}
          className="w-[350px] h-[350px]"
          priority={true}
          alt="Pagina não encontrada"
        />
        <Link href="/" className="mt-10">
          Voltar para home
        </Link>
      </div>
    </div>
  );
}
