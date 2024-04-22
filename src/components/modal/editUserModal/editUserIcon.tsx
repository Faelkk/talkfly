import Image from "next/image";

export default function EditUserIcon({
  img,
}: {
  img: string | null | undefined;
}) {
  return (
    <div className="flex flex-col items-center justify-center relative">
      {img ? (
        <Image
          src={img}
          className="w-16 h-16 rounded-full  cursor-pointer overflow-hidden  object-cover object-center"
          height={256}
          width={256}
          alt="Icone do perfil"
        />
      ) : (
        <div
          className="w-16 h-16 rounded-full cursor-pointer overflow-hidden bg-gray-400 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <Image
            src="/assets/user.svg"
            width={32}
            height={32}
            alt="Foto de perfil"
            className="w-[2rem] h-[2rem]"
          />
        </div>
      )}
      <span className="font-dmSans mt-4 cursor-pointer text-gray-800">
        Clique aqui para mudar sua foto de perfil
      </span>
    </div>
  );
}
