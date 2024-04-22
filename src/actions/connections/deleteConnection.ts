"use server";

import { DELETE_CONNECTIONS } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function deleteConnection(contactId: string) {
  const token = cookies().get("token")?.value;
  const apiKey = cookies().get("apiKey")?.value;

  try {
    const { url } = DELETE_CONNECTIONS(contactId);
    if (!token || !apiKey) {
      throw new Error("Internal server error");
    }

    if (!contactId) {
      throw new Error("contactId is required");
    }

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    headers.append("apiKey", apiKey);

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        apiKey: apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("internal server error");
    }
    const data = await response.json();

    revalidateTag("connections");
    return data;
  } catch (err) {
    return apiError(err);
  }
}
