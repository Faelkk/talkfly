"use client";

import signin from "@/actions/signin";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
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

export default function SigninForm() {
  const [state, action] = useFormState(signin, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/home";
  }, [state.ok]);

  return (
    <form action={action}>
      <Input type="email" placeholder="Email" name="email" />
      <Input type="password" placeholder="Senha" name="password" />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
