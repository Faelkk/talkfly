"use server";

import { SEND_IMAGE } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export default async function sendImage(formData: FormData) {
  const content = formData.get("content") as File | null;
  const contentType = formData.get("contentType") as string | null;
  const contactId = formData.get("contactId") as string | null;

  const token = cookies().get("token")?.value;
  const apiKey = cookies().get("apiKey")?.value;

  try {
    if (!content || !contentType || !contactId) {
      throw new Error("Preencha os dados");
    }

    if (!token || !apiKey) {
      throw new Error("Internal server error");
    }

    const { url } = SEND_IMAGE();

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    headers.append("apiKey", apiKey);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + token,
        apiKey: apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar imagem");
    }

    const data = await response.json();

    revalidateTag("messages");

    return { data, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
