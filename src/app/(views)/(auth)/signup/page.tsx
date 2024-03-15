import Logo from "@/components/Logo/logo";
import SignupForm from "@/components/auth/signup/SignupForm";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div>
      <div className="flex flex-col items-center mb-10">
        <Logo className="w-24 h-12 mb-4" />
        <h1 className="text-[32px] font-semibold mb-4 font-poppins">
          Criar uma conta
        </h1>
        <span className="text-[18px] font-dmSans">
          Já tem uma conta?{" "}
          <Link href="/signin" className="font-semibold">
            fazer login
          </Link>
        </span>
      </div>
      <SignupForm />
    </div>
  );
}
