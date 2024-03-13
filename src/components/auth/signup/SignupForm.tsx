"use client";

import signup from "@/actions/signup";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import ErrorMessage from "@/components/helpers/error-message";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function SignupForm() {
  const [state, action] = useFormState(signup, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/home";
  }, [state.ok]);

  return (
    <form action={action}>
      <Input type="text" name="name" placeholder="Name" />
      <Input type="email" name="email" placeholder="Email" />
      <Input type="text" name="username" placeholder="Nome de usuario" />
      <Input type="password" name="password" placeholder="Senha" />
      <ErrorMessage error={state.error} />
      <Button>Criar conta</Button>
    </form>
  );
}
