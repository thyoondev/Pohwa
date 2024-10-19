import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { MobileSideMenu } from "./MobileSideMenu";
import { MENU_LIST } from "@/entities/menuList";
import { useRouter } from "next/router";

const GlobalHeader = () => {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full lg:h-14 flex justify-between items-center px-4 py-2 transition-colors duration-300 bg-background`}
    >
      <figure onClick={() => router.push("/")}>
        <Image
          src="/pohwa_logo.png"
          width={isDesktop ? 70 : 60}
          height={isDesktop ? 42 : 40}
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
            {menu.id === 4 ? (
              <span className="text-red-700 hover:text-red-500">
                {menu.title}
              </span>
            ) : (
              menu.title
            )}
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
