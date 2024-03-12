import Logo from "@/components/Logo/logo";
import SigninForm from "@/components/auth/signin/SigninForm";
import Link from "next/link";

export default async function SigninPage() {
  return (
    <div>
      <div className="flex flex-col items-center mb-10">
        <Logo className="w-24 h-12 mb-4" />
        <h1 className="text-[32px] font-semibold mb-4 font-poppins">
          Entre em sua conta
        </h1>
        <span className="text-[18px] font-dmSans">
          Ainda não tem uma?{" "}
          <Link href="/signup" className="font-semibold">
            criar uma conta
          </Link>
        </span>
      </div>
      <SigninForm />
    </div>
  );
}
