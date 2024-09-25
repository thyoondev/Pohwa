import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";

const GlobalHeader = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  return (
    <header className="fixed top-0 left-0  z-50 w-full h-12 flex justify-between items-center px-4">
      <figure className="">
        <Image
          src="/pohwa_logo.svg"
          width={isDesktop ? 80 : 150}
          height={isDesktop ? 48 : 50}
          alt="logo"
        />
      </figure>
      <nav className="text-white text-xs font-archivo flex gap-48">
        <Link href={"/"}>HOME</Link>
        <Link href={"/work"}>WORK</Link>
        {/* <Link>ABOUT</Link> */}
        {/* <Link>CONTACT</Link> */}
        <a href="https://www.instagram.com/pohwa_official" target="_blank">
          INSTAGRAM
        </a>
      </nav>
      <div></div>
    </header>
  );
};

export default GlobalHeader;
