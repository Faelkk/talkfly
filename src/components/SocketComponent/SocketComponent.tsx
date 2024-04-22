"use client";

import { ConnectionData } from "@/actions/connections/getConnections";
import { SolicitationsData } from "@/actions/solicitations/acceptSolicitation";
import { useConnec } from "@/context/connecContext";
import { useSolicitation } from "@/context/solicitationContext";
import { useUser } from "@/context/userContext";
import { MutableRefObject, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

interface ConnectionDelete {
  deleted: boolean;
  contactId: string;
}

interface ConnectionNew {
  inviteExists: SolicitationsData;
  createdContact: ConnectionData;
}

export default function SocketComponent() {
  const { setConnection } = useConnec();
  const { setSolicitation, setSolicitationUser } = useSolicitation();
  const { user } = useUser();
  const socketRef: MutableRefObject<Socket<any, any> | null> = useRef(null);

  useEffect(() => {
    socketRef.current = io("http://localhost:5000");

    const socket = socketRef.current;

    socket.on("connection@delete", (connectionDelete: ConnectionDelete) => {
      if (connectionDelete.deleted) {
        setConnection((prevConnection) =>
          prevConnection?.filter(
            (connectionFilter) =>
              connectionFilter.id !== connectionDelete.contactId
          )
        );
      }
    });

    socket.on("invite@new", (inviteNew: SolicitationsData) => {
      setSolicitationUser((prevSolicitation) => [
        ...(prevSolicitation as any),
        inviteNew,
      ]);
      if (inviteNew.receiver_id === user?.id) {
        setSolicitation((prevSolicitation) => [
          ...(prevSolicitation as any),
          inviteNew,
        ]);
      }
    });

    return () => {
      socket.off("connection@delete");
      socket.off("invite@new");
      socket.disconnect();
    };
  }, [setConnection, setSolicitation, setSolicitationUser, user]);

  useEffect(() => {
    if (!socketRef.current) return;

    const socket = socketRef.current;

    socket.on("connection@new", (connectionNew: ConnectionNew) => {
      setSolicitationUser((prevSolicitation) =>
        prevSolicitation?.filter(
          (soliFilter) => soliFilter.id !== connectionNew.inviteExists.id
        )
      );

      setSolicitation((prevSolicitation) =>
        prevSolicitation?.filter(
          (soliFilter) => soliFilter.id !== connectionNew.inviteExists.id
        )
      );

      setConnection((prevConnection) => [
        ...(prevConnection as any),
        connectionNew.createdContact,
      ]);
    });

    return () => {
      socket.off("connection@new");
    };
  }, [setConnection, setSolicitation, setSolicitationUser]);

  return null;
}
