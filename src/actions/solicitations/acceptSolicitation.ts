"use server";

import { SOLICITATIONS_ACCEPT } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export interface SolicitationsData {
  accepted: boolean;
  id: string;
  receiver_id: string;
  sender_id: string;
  created_at: Date;
}

export async function acceptSolicitation(inviteId: string) {
  const token = cookies().get("token")?.value;
  const apiKey = cookies().get("apiKey")?.value;

  try {
    const { url } = SOLICITATIONS_ACCEPT();
    if (!token || !apiKey) {
      throw new Error("Internal server error");
    }

    if (!inviteId) {
      throw new Error("InviteId is required");
    }

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    headers.append("apiKey", apiKey);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        apiKey: apiKey,
      },
      body: JSON.stringify({ inviteId }),
    });

    if (!response.ok) {
      throw new Error("internal server error");
    }
    const data = (await response.json()) as SolicitationsData[];

    revalidateTag("solicitation");
    revalidateTag("connections");

    return data;
  } catch (err) {
    return apiError(err);
  }
}
