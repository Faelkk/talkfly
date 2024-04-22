"use server";

import { User } from "@/context/userContext";
import { EDIT_USER } from "@/functions/api";
import apiError from "@/functions/api-error";
import editUserDto from "@/validations/user/editUserDto";
import { cookies } from "next/headers";

interface EditUserProps {
  formData: FormData;
  user: User | null;
}

export default async function editUser({ formData, user }: EditUserProps) {
  const email = formData.get("email") as string | null;

  const icon = formData.get("icon") as File | null;
  const name = formData.get("name") as string | null;
  const username = formData.get("username") as string | null;
  const token = cookies().get("token")?.value;
  const apiKey = cookies().get("apiKey")?.value;

  try {
    if (
      icon === user?.icon &&
      name === user?.name &&
      email === user.email &&
      username === user.username
    ) {
      return { data: null, ok: true, error: "" };
    }

    if (!token || !apiKey) {
      throw new Error("Internal server error");
    }
    const validatedDtoForm = await editUserDto({
      name,
      username,
      email,
      icon,
      user,
    });

    let hasValue = false;
    for (const [key, value] of validatedDtoForm.entries() as any) {
      if (value) {
        hasValue = true;
        break;
      }
    }

    if (!hasValue) {
      return { data: null, ok: true, error: "" };
    }

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    headers.append("apiKey", apiKey);
    const { url } = EDIT_USER();

    const response = await fetch(url, {
      method: "PATCH",
      body: validatedDtoForm,
      headers: {
        Authorization: "Bearer " + token,
        apiKey: apiKey,
      },
      next: {
        revalidate: 60,
      },
    });
    if (!response.ok) throw new Error("Erro ao editar o usuario.");

    const data = (await response.json()) as User;

    return { data, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
