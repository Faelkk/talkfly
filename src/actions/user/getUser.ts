"use server";

import { USER_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";
// import { cache } from "react";

export type User = {
  id: string;
  email: string;
  username: string;
  name: string;
  password: string;
  icon: string | null;
};

export default async function userGet() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) throw new Error("Token não encontrando");
    const { url } = USER_GET();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });
    if (!response.ok) throw new Error("Erro ao pegar o usuario.");

    const data = (await response.json()) as User;

    return { data, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
