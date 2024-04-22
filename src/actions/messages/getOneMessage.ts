"use server";

import { MESSAGE_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export interface MessagesData {
  id: string;
  content_type: string;
  content: string;
  receiver_id: string;
  sender_id: string;
  sent_at: string;
}

export async function getOneMessage(contactId: string) {
  const token = cookies().get("token")?.value;
  const apiKey = cookies().get("apiKey")?.value;

  try {
    const { url } = MESSAGE_GET(contactId);
    if (!token || !apiKey) {
      throw new Error("Internal server error");
    }
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    headers.append("apiKey", apiKey);

    const response = await fetch(url, {
      next: {
        tags: ["messages"],
      },
      headers: {
        Authorization: "Bearer " + token,
        apiKey: apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("internal server error");
    }

    const data = await response.json();

    return { data, ok: true, error: "" };
  } catch (err) {
    return apiError(err);
  }
}
