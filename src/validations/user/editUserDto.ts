import { User } from "@/context/userContext";

interface EditUserDtoProps {
  username: string | null;
  name: string | null;
  email: string | null;
  icon: File | null;
  user?: User | null;
}

export default async function editUserDto({
  username,
  name,
  email,
  icon,
  user,
}: EditUserDtoProps): Promise<FormData> {
  const validatedDto = new FormData();

  if (username) {
    if (typeof username === "string") {
      if (/\s/.test(username)) {
        throw new Error("Username não pode conter espaços em branco");
      }
      if (username.toLowerCase() !== user?.username.toLowerCase()) {
        validatedDto.append("username", username);
      }
    } else {
      throw new Error("Username tem que ser uma string");
    }
  } else {
    throw new Error("Username não pode estar em branco");
  }

  if (email) {
    if (typeof email === "string") {
      if (/\s/.test(email)) {
        throw new Error("Email não pode conter espaços em branco");
      }
      if (email.toLowerCase() !== user?.email.toLowerCase()) {
        validatedDto.append("email", email);
      }
    } else {
      throw new Error("Email tem que ser uma string");
    }
  } else {
    throw new Error("Email não pode estar em branco");
  }

  if (name) {
    if (typeof name === "string") {
      if (/\s/.test(name)) {
        throw new Error("Nome não pode conter espaços em branco");
      }
      if (name.toLowerCase() !== user?.name.toLowerCase()) {
        validatedDto.append("name", name);
      }
    } else {
      throw new Error("Nome tem que ser uma string");
    }
  } else {
    throw new Error("Nome não pode estar em branco");
  }

  if (icon && icon !== ("null" as any)) {
    validatedDto.append("icon", icon);
  }

  return validatedDto;
}
