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

export function USER_BY_ID(userId: string) {
  return {
    url: API_URL + `/user/${userId}`,
  };
}

export function EDIT_USER() {
  return {
    url: API_URL + `/user/edit`,
  };
}

export function SOLICITATIONS_GET() {
  return {
    url: API_URL + "/contacts/invites",
  };
}

export function SOLICITATIONS_SENDED() {
  return {
    url: API_URL + "/contacts/send",
  };
}

export function SOLICITATIONS_ACCEPT() {
  return {
    url: API_URL + "/contacts/accept",
  };
}

export function SOLICITATIONS_RECUSE() {
  return {
    url: API_URL + "/contacts/reject",
  };
}
export function SOLICITATIONS_CANCEL() {
  return {
    url: API_URL + "/contacts/cancel",
  };
}

export function CONNECTIONS_GET() {
  return {
    url: API_URL + "/contacts",
  };
}

export function DELETE_CONNECTIONS(contactId: string) {
  return {
    url: API_URL + `/contacts/${contactId}`,
  };
}

export function ADD_CONNECTION() {
  return {
    url: API_URL + "/contacts",
  };
}

export function MESSAGES_GET(contactId: string) {
  return {
    url: API_URL + `/messages/${contactId}`,
  };
}

export function MESSAGE_GET(contactId: string) {
  return {
    url: API_URL + `/message/${contactId}`,
  };
}

export function SEND_MESAGE() {
  return {
    url: API_URL + "/messages",
  };
}

export function SEND_IMAGE() {
  return {
    url: API_URL + "/messages/image",
  };
}

export function SEND_AUDIO() {
  return {
    url: API_URL + "/messages/audio",
  };
}

export function DELETE_MESSAGE(messageId: string) {
  return {
    url: API_URL + `/messages/${messageId}`,
  };
}

export function DELETE_ALL_MESSAGES() {
  return {
    url: API_URL + `/messages/all`,
  };
}
