"use client";

import { SolicitationsData } from "@/actions/solicitations/acceptSolicitation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ISolicitationContext = {
  solicitation: SolicitationsData[] | null;
  solicitationUser: SolicitationsData[] | null;
  setSolicitationUser: Dispatch<
    SetStateAction<SolicitationsData[] | undefined>
  >;
  setSolicitation: Dispatch<SetStateAction<SolicitationsData[] | undefined>>;
};

export const SolicitationContext = createContext<ISolicitationContext | null>(
  null
);

export const useSolicitation = () => {
  const context = useContext(SolicitationContext);

  if (context === null) {
    throw new Error("SolicitationData context must be used inside a provider");
  }
  return context;
};

export function SolicitationContextProvider({
  children,
  solicitation,
}: {
  children: ReactNode;
  solicitation: SolicitationsData[] | null;
}) {
  const [solicitationState, setSolicitation] = useState<
    SolicitationsData[] | null
  >(solicitation);
  const [solicitationUser, setSolicitationUser] = useState<
    SolicitationsData[] | null
  >(solicitation);

  useEffect(() => {
    console.log(solicitationState);
  }, [solicitationState]);

  return (
    <SolicitationContext.Provider
      value={{
        solicitation: solicitationState,
        solicitationUser,
        setSolicitationUser: setSolicitationUser as Dispatch<
          SetStateAction<SolicitationsData[] | undefined>
        >,
        setSolicitation: setSolicitation as Dispatch<
          SetStateAction<SolicitationsData[] | undefined>
        >,
      }}
    >
      {children}
    </SolicitationContext.Provider>
  );
}
