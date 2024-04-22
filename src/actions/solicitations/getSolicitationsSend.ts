import { SOLICITATIONS_SENDED } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export interface SolicitationsData {
  accepted: boolean;
  id: string;
  receiver_id: string;
  sender_id: string;
  created_at: Date;
}

export async function getSolicitationSend() {
  const token = cookies().get("token")?.value;
  const apiKey = cookies().get("apiKey")?.value;

  try {
    const { url } = SOLICITATIONS_SENDED();
    if (!token || !apiKey) {
      throw new Error("Internal server error");
    }
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    headers.append("apiKey", apiKey);

    const response = await fetch(url, {
      next: {
        tags: ["solicitationSend"],
      },
      headers: {
        Authorization: "Bearer " + token,
        apiKey: apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("internal server error");
    }

    const data = (await response.json()) as SolicitationsData[];

    return data;
  } catch (err) {
    return apiError(err);
  }
}
