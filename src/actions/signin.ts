"use server";

import { SIGNIN_USER } from "@/functions/api";
import apiError from "@/functions/api-error";
import { error } from "console";
import { cookies } from "next/headers";

export default async function signin(state: {}, formData: FormData) {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!password || !email) throw new Error("Preencha os dados");
    const { url } = SIGNIN_USER();
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Credenciais invalidas");
    }

    const data = await response.json();

    cookies().set("token", data.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    cookies().set("apiKey", data.apiKey.api_key, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return { data: null, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
