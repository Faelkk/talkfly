import getUser from "@/actions/user/getUser";
import UserCard from "@/components/helpers/user-card";

export default async function ConnectionCard() {
  const { data } = await getUser();
  return (
    <>
      <UserCard user={data} />
      <div className="flex flex-col">
        <h2 className="font-poppins font-medium text-[16px] p2:text-[18px] capitalize">
          {data?.username}
        </h2>
        <span className="text-gray-600 text-[12px] font-poppins font-medium p:hidden p2:block"></span>
      </div>
    </>
  );
}
