import { FOOTER_MENU_LIST } from "@/shared/constants/menu";
import Image from "next/image";

const GlobalFooter = () => {
  return (
    <>
      <div className="h-[calc(100dvh-56px)] w-full bg-primary p-4 lg:p-14 snap-center shrink-0">
        <p className="text-background text-4xl lg:text-6xl font-archivo -tracking-[.04em]">
          Motorcycle isn&apos;t just a machine,
          <br /> It&apos;s an expression of freedom, passion, <br /> And the
          spirit of endless adventure.
          <br />
          <br />
          At Pohwa, <br />
          We believe in shaping an identity that reflects your unique riding
          style.
        </p>
      </div>
      <footer className="h-[calc(100dvh-56px)] w-full bg-background flex justify-start items-center gap-4 px-4 relative snap-center shrink-0">
        <figure className="w-full h-full flex justify-center items-center">
          <Image src="/pohwa_logo.png" alt="logo" width={200} height={96} />
        </figure>
        <p className="absolute bottom-2 left-2 text-xs uppercase font-bold">
          {FOOTER_MENU_LIST.map((menu) => (
            <span
              key={menu.title}
              onClick={menu.url}
              className="cursor-pointer hover:underline"
            >
              {menu.title}
            </span>
          ))}
        </p>

        <p className="absolute bottom-2 right-2 text-xs  text-right font-bold">
          <span className="uppercase">
            © 2024 pohwa.xyz all rights reserved.
          </span>
          <br />
          pohwa.official@gmail.com
        </p>
      </footer>
    </>
  );
};

export default GlobalFooter;
