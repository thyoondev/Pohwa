import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { MobileSideMenu } from "./MobileSideMenu";
import { NAV_MENU_LIST } from "@/shared/constants/menu";
import { useRouter } from "next/router";

const GlobalHeader = () => {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full h-[70px] flex justify-between items-center px-4 transition-colors duration-300 bg-transparent`}
    >
      <figure
        onClick={() => router.push("/")}
        className="flex items-center justify-center"
      >
        <Image
          src="/pohwa_logo2.png"
          width={isDesktop ? 70 : 60}
          height={isDesktop ? 70 : 40}
          alt="logo"
          className="cursor-pointer mt-3 lg:mt-0"
        />
      </figure>
      <div className="hidden lg:flex">
        <span
          onClick={() => {
            window.location.href = "mailto:pohwa.official@gmail.com";
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.opacity = "0";
            setTimeout(() => {
              target.textContent = "pohwa.official@gmail.com";
              target.style.opacity = "1";
            }, 30);
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.textContent = "Seoul, Korea";
          }}
          className="text-white text-base lg:text-lg font-sans font-semibold cursor-pointer"
        >
          Seoul, Korea
        </span>
      </div>
      <nav className="text-white text-lg font-sans lg:flex hidden uppercase font-semibold">
        {NAV_MENU_LIST.map((menu, index) => {
          if (menu.title === "Shop") {
            return (
              <button
                key={menu.id}
                onClick={() => window.open(menu.url, "_blank")}
                className="uppercase px-2 py-0.5 -mt-[1px] bg-red-600 hover:bg-transparent text-white transition-all duration-200  rounded-full"
              >
                {menu.title}
              </button>
            );
          }
          return (
            <Link
              key={menu.id}
              href={menu.url.startsWith("http") ? menu.url : `${menu.url}`}
              target={menu?.target === "_blank" ? "_blank" : "_self"}
            >
              <span
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.opacity = "0";
                  setTimeout(() => {
                    target.style.opacity = "1";
                  }, 30);
                }}
                className={`relative mr-4 ${
                  router.pathname === menu.url
                    ? "text-red-700 hover:text-red-500"
                    : "text-white"
                }`}
              >
                {menu.title}
              </span>
            </Link>
          );
        })}
      </nav>
      <div className="lg:hidden">
        <MobileSideMenu />
      </div>
    </header>
  );
};

export default GlobalHeader;
