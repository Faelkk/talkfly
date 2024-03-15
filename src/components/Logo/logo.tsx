import Image from "next/image";
import Link from "next/link";

export default function Logo({ className }: { className: string }) {
  return (
    <Link href="/">
      <Image
        src="/assets/talkfly.svg"
        width={120}
        height={60}
        className={className}
        alt="Logo talkfly"
        priority
      />
    </Link>
  );
}
