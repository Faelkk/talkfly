"use client";

import signup from "@/actions/auth/signup";
import Button from "@/components/Forms/Button";
import Input from "@/components/Forms/Input";
import ErrorMessage from "@/components/helpers/error-message";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Entrando...</Button>
      ) : (
        <Button disabled={pending}>Entrar</Button>
      )}
    </>
  );
}

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
      <FormButton />
    </form>
  );
}
