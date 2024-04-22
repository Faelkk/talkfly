import { CONNECTIONS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export interface ConnectionData {
  id: string;
  inviter_user_id: string;
  accepted_user_id: string;
}

export async function getConnection() {
  const token = cookies().get("token")?.value;
  const apiKey = cookies().get("apiKey")?.value;

  try {
    const { url } = CONNECTIONS_GET();
    if (!token || !apiKey) {
      throw new Error("Internal server error");
    }
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    headers.append("apiKey", apiKey);

    const response = await fetch(url, {
      next: {
        tags: ["connections"],
      },
      headers: {
        Authorization: "Bearer " + token,
        apiKey: apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("internal server error");
    }
    const data = (await response.json()) as ConnectionData[];

    return data;
  } catch (err) {
    return apiError(err);
  }
}
