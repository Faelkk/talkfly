import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";

export default async function SigninForm() {
  return (
    <form>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
      <Button>Entrar</Button>
    </form>
  );
}
