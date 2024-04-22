"use server";

import { ADD_CONNECTION } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export default async function addConnection(formData: FormData) {
  const username = formData.get("username") as string | null;

  const token = cookies().get("token")?.value;
  const apiKey = cookies().get("apiKey")?.value;

  try {
    if (!username) {
      throw new Error("Preencha os dados");
    }

    if (!token || !apiKey) {
      throw new Error("Internal server error");
    }

    const { url } = ADD_CONNECTION();

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    headers.append("apiKey", apiKey);

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ username }),
      headers: {
        Authorization: "Bearer " + token,
        apiKey: apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar solicitação");
    }

    const data = await response.json();

    revalidateTag("solicitation");

    return { data, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
