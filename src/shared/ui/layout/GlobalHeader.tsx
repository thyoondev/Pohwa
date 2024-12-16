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
      className={`fixed top-0 left-0 z-50 w-full h-14 flex justify-between items-center px-8 transition-colors duration-300 bg-transparent`}
    >
      <figure
        onClick={() => router.push("/")}
        className="flex items-center justify-center"
      >
        <Image
          src="/pohwa_logo.png"
          width={isDesktop ? 120 : 60}
          height={isDesktop ? 56 : 40}
          alt="logo"
          className="cursor-pointer mt-3 lg:mt-8"
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
      <nav className="text-white text-3xl font-sans lg:flex hidden uppercase font-semibold">
        {NAV_MENU_LIST.map((menu, index) => (
          <Link
            key={menu.id}
            href={menu.url.startsWith("http") ? menu.url : `${menu.url}`}
            target={menu.url.startsWith("http") ? "_blank" : "_self"}
          >
            <span
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.opacity = "0";
                setTimeout(() => {
                  target.style.opacity = "1";
                }, 30);
              }}
              className={`relative  ${
                router.pathname === menu.url
                  ? "pl-8 text-red-700 hover:text-red-500"
                  : "text-white"
              }`}
            >
              {router.pathname === menu.url && (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl -mt-0.5"
                  style={{
                    animation: "pulse 0.3s ease-in-out",
                  }}
                >
                  ●
                  <style jsx>{`
                    @keyframes pulse {
                      0% {
                        transform: translateY(-50%) scale(0);
                      }
                      100% {
                        transform: translateY(-50%) scale(1);
                      }
                    }
                  `}</style>
                </span>
              )}
              {menu.title}
            </span>
            {index !== NAV_MENU_LIST.length - 1 && (
              <span className="mx-4 ">/</span>
            )}
          </Link>
        ))}
      </nav>
      <div className="lg:hidden">
        <MobileSideMenu />
      </div>
    </header>
  );
};

export default GlobalHeader;
