export const API_URL = "http://localhost:5000";

export function SIGNIN_USER() {
  return {
    url: API_URL + "/signin",
  };
}

export function SIGNUP_USER() {
  return {
    url: API_URL + "/signup",
  };
}

export function USER_GET() {
  return {
    url: API_URL + "/me",
  };
}
