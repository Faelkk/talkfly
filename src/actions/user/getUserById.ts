"use server";

import { USER_BY_ID } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export type User = {
  id: string;
  email: string;
  username: string;
  name: string;
  password: string;
  icon: string | null;
};

export default async function getUserById(userId: string) {
  try {
    const token = cookies().get("token")?.value;
    const apiKey = cookies().get("apiKey")?.value;

    if (!token || !apiKey) {
      throw new Error("Internal server error");
    }
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    headers.append("apiKey", apiKey);

    const { url } = USER_BY_ID(userId);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        apiKey: apiKey,
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
