import { useConnec } from "@/context/connecContext";
import Image from "next/image";
import Link from "next/link";

export default function NoConnectionsFilter() {
  const { inputValue } = useConnec();

  return (
    <section className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-[80%] text-center overflow-hidden">
        <h2 className="font-dmSans text-[18px] font-normal  overflow-hidden">
          Nenhuma conexão encontrada para{" "}
          <span className="font-semibold">{inputValue}</span>{" "}
        </h2>
        <div className="flex justify-center mt-10">
          <Image
            src="/illustrations/empty-box.svg"
            width={400}
            height={400}
            className="w-52 h-52"
            alt="Nenhuma conexão encontrada"
          />
        </div>
        <div className="flex justify-center items-center mt-20">
          <Link href="/connections">
            <button className="mb-20 border border-black font-poppins font-medium text-[18px]  p-3 rounded">
              Procurar conexões
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
