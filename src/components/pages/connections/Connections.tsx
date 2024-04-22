import React from "react";
import { ConnectionData } from "@/actions/connections/getConnections";
import ConnectionUser from "./ConnectionUser";

interface ConnectionsProps {
  connections: ConnectionData[];
}

export default function Connections({ connections }: ConnectionsProps) {
  return (
    <div className="border-t border-gray-150 mt-10 md:mt-10">
      <section className="mt-10 mb-10">
        <h2 className="font-poppins text-[28px] font-semibold text-center">
          Suas conexões
        </h2>

        <section className="flex flex-col ">
          {connections.map((connection, index) => (
            <ConnectionUser connection={connection} key={index} />
          ))}
        </section>
      </section>
    </div>
  );
}
