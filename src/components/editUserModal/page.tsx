import Image from "next/image";

export default async function EditUserModal() {
  return (
    <aside className="fixed h-screen w-full bg-black/50 top-0 left-0 z-10">
      <section className="bg-gray-350 absolute w-[28.125rem] right-0 h-full  flex flex-col">
        <header className="flex mx-5 mt-5 items-center justify-center relative">
          <Image
            src="/assets/arrow-back.svg"
            width={24}
            height={24}
            className="w-5 h-5 absolute  left-3 md:left-0 top-3"
            alt="Voltar"
          />
          <h1 className="font-poppins text-[32px] font-semibold">Seu perfil</h1>
        </header>
        <div className="border border-gray-400 mt-5 mx-5"></div>

        <div className="mt-6 flex flex-col items-center justify-start mx-5 flex-1">
          <div className="h-12 w-12 rounded-full bg-black "></div>

          <div className="mt-10 flex flex-col gap-2">
            <span className="font-poppins text-[18px] "> Nome </span>
            <form className="flex items-center gap-5 ]">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                className="border border-black p-2 rounded placeholder:text-black text-black font-dmSans"
              />
              <label htmlFor="name">
                <Image
                  src="/assets/edit-icon.svg"
                  width={30}
                  height={30}
                  className="w-5 h-5"
                  alt="Clique para editar  seu nome"
                />
              </label>
            </form>
            <div className="border border-gray-400 mt-5  w-full"></div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <span className="font-poppins text-[18px] "> Email </span>
            <form className="flex items-center gap-5 ]">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="border border-black p-2 rounded placeholder:text-black text-black font-dmSans"
              />
              <label htmlFor="email">
                <Image
                  src="/assets/edit-icon.svg"
                  width={30}
                  height={30}
                  className="w-5 h-5"
                  alt="Clique para editar  seu email"
                />
              </label>
            </form>
            <div className="border border-gray-400 mt-5  w-full"></div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <span className="font-poppins text-[18px] "> Senha </span>
            <form className="flex items-center gap-5 ]">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Nome"
                className="border border-black p-2 rounded placeholder:text-black text-black font-dmSans"
              />
              <label htmlFor="password">
                <Image
                  src="/assets/edit-icon.svg"
                  width={30}
                  height={30}
                  className="w-5 h-5"
                  alt="Clique para editar sua senha"
                />
              </label>
            </form>
            <div className="border border-gray-400 mt-5  w-full"></div>
          </div>
        </div>

        <div className="flex justify-center items-center mb-20">
          <button className="bg-black text-gray-50 text-[18px] font-poppins font-medium p-2 rounded-[8px] w-[18.75rem]">
            Salvar alterações
          </button>
        </div>
      </section>
    </aside>
  );
}
