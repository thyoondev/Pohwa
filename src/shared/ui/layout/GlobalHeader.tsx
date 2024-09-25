import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import Image from "next/image";

const GlobalHeader = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  return (
    <header className="fixed top-0 left-0 bg-white z-50 w-full h-12 flex justify-start items-center gap-4 px-4">
      <figure className="">
        <Image
          src="/pohwa_logo.svg"
          width={isDesktop ? 70 : 150}
          height={isDesktop ? 40 : 50}
          alt="logo"
        />
      </figure>
      <nav className="text-black text-3xl font-archivo flex gap-4">
        <span>HOME</span>
        <span>WORK</span>
        <span>ABOUT</span>
        <span>CONTACT</span>
      </nav>
    </header>
  );
};

export default GlobalHeader;
