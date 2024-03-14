import HeaderMessages from "../headerMessages/HeaderMessages";

export default async function MessagesNoConnections() {
  return (
    <>
      <div className=" w-full  md:w-[300px] flex flex-col h-full border-r border-gray-400">
        <HeaderMessages />

        <MessagesNoConnections />
      </div>
    </>
  );
}
