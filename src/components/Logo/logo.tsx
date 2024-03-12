import Image from "next/image";

export default async function Logo({ className }: { className: string }) {
  return (
    <Image
      src="/assets/talkfly.svg"
      width={120}
      height={60}
      className={className}
      alt="Logo talkfly"
    />
  );
}
