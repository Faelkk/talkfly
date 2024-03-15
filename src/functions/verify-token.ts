import { jwtVerify } from "jose";
const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false;

  try {
    jwtVerify(token, new TextEncoder().encode(jwtSecret), {
      algorithms: ["HS256"],
    });
    return true;
  } catch (err) {
    return false;
  }
}
