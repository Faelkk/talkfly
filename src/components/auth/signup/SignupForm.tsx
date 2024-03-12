import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";

export default async function SignupForm() {
  return (
    <form>
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="Nome de usuario" />
      <Input type="password" placeholder="Senha" />
      <Button>Criar conta</Button>
    </form>
  );
}
