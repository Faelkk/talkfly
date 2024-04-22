import { SOLICITATIONS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export interface SolicitationsData {
  accepted: boolean;
  id: string;
  receiver_id: string;
  sender_id: string;
  created_at: Date;
}

export async function solicitations() {
  const token = cookies().get("token")?.value;
  const apiKey = cookies().get("apiKey")?.value;

  try {
    const { url } = SOLICITATIONS_GET();
    if (!token || !apiKey) {
      throw new Error("Internal server error");
    }
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    headers.append("apiKey", apiKey);

    const response = await fetch(url, {
      next: {
        tags: ["solicitation"],
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

    return { data };
  } catch (err) {
    return apiError(err);
  }
}
