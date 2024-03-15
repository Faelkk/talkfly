"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type IUserContext = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

type User = {
  id: string;
  email: string;
  username: string;
  name: string;
  password: string;
  icon: string | null;
};

export const UserContext = createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("User context must be used inside a provider");
  }
  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: User | null;
}) {
  const [userState, setUser] = useState<User | null>(user);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
