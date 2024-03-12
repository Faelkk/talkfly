import Image from "next/image";

export default async function AuthImage() {
  return (
    <div className="flex items-end max-xl:hidden">
      <Image
        src="/illustrations/login.svg"
        className="h-[400px] w-full max-w-[650px] "
        width={1200}
        height={1200}
        alt="Faça login ou registre-se"
      />
    </div>
  );
}
