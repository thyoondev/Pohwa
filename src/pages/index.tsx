import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
const MENU_LIST = [
  // {
  //   title: "About",
  //   url: "/about",
  // },
  {
    title: " Instagram",
    url: () => window.open("https://www.instagram.com/"),
  },
];

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return (
    <>
      <div className="fixed  -left-12 -top-[70px]  lg:-left-14 lg:-top-20 z-50">
        <Image
          src="/pohwa_logo.png"
          width={isDesktop ? 300 : 250}
          height={isDesktop ? 200 : 150}
          alt="logo"
        />
      </div>

      <main>
        <div className="h-screen w-full relative">
          <ReactPlayer
            url={"/assets/videos/mincho/index.mp4"}
            loop
            muted
            controls={false}
            playing
            height={"100%"}
            width={"100%"}
            background={true}
            className="bg-video"
          />
          <div className="absolute left-0 bottom-0 z-10 pl-4 pb-4 lg:pl-8 lg:pb-8 flex flex-col gap-2">
            {MENU_LIST.map((menu, i) => (
              <span
                key={menu.title}
                className="font-anton text-4xl lg:text-8xl cursor-pointer hover:text-red-600"
                onClick={menu.url}
              >
                {menu.title.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* <div className="flex justify-center items-center my-24">
        <InstaCarousel />
      </div> */}
      </main>
    </>
  );
}
