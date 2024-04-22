"use server";

import { SIGNUP_USER } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export default async function signup(state: {}, formData: FormData) {
  const email = formData.get("email") as string | null;
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  const name = formData.get("name") as string | null;

  try {
    if (!username || !password || !email || !name)
      throw new Error("Preencha os dados");

    const { url } = SIGNUP_USER();
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, username, password, name }),
    });

    if (!response.ok) {
      throw new Error("Error ao criar usuario");
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
