import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { MobileSideMenu } from "./MobileSideMenu";
import { MENU_LIST } from "@/entities/menuList";

const GlobalHeader = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  return (
    <header className="fixed top-0 left-0 z-10 w-full lg:h-12 flex justify-between items-center px-4 pt-4">
      <figure className="">
        <Image
          src="/pohwa_logo.svg"
          width={isDesktop ? 80 : 80}
          height={isDesktop ? 48 : 80}
          alt="logo"
        />
      </figure>
      <nav className="text-white text-xs font-archivo lg:flex gap-48 hidden">
        {MENU_LIST.map((menu) => (
          <Link
            key={menu.id}
            href={menu.url.startsWith("http") ? menu.url : `${menu.url}`}
            target={menu.url.startsWith("http") ? "_blank" : "_self"}
          >
            {menu.title}
          </Link>
        ))}
      </nav>
      <div>
        <div className="lg:hidden">
          <MobileSideMenu />
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
