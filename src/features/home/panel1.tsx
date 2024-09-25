import ReactPlayer from "react-player";

function Panel1() {
  return (
    <section className="w-[100vw] h-[100dvh] relative">
      <ReactPlayer
        url={"https://pohwa.xyz/assets/video/main/powha_video_1.mp4"}
        loop
        muted
        controls={false}
        playing
        height={"100%"}
        width={"100%"}
        background={true}
        playsinline={true}
        className="bg-video"
        fallback={<div className="bg-[url('https://pohwa.xyz/logo.png')]" />}
      />
      {/* <nav className="absolute left-0 bottom-0 z-10 pl-4 pb-4 lg:pl-8 lg:pb-8 flex flex-col gap-2">
        {MAIN_MENU_LIST.map((menu, i) => (
          <span
            key={menu.title}
            className="font-anton text-4xl lg:text-8xl cursor-pointer  hover:text-red-600 "
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
      </nav> */}
    </section>
  );
}

export default Panel1;
