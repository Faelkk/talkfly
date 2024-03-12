import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default async function Button({ children }: ButtonProps) {
  return (
    <button className="bg-purple-200 w-[18rem]  pp:w-[22rem] p:w-[28.75rem] text-gray-50 rounded-[8px] py-[10px] px-[10px] hover:bg-purple-100 text-[18px] font-medium font-poppins">
      {children}
    </button>
  );
}
