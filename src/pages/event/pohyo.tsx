import { Button } from "@/shared/ui/button";
import Image from "next/image";

const Pohyo = () => {
  const handleRegister = () => {
    window.open("https://lu.ma/event/evt-AyGQKkYgASGokWE", "_blank");
  };

  return (
    <div>
      <div className="relative w-full snap-start overflow-hidden bg-[#040203]">
        {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/video/main/powha_video_3.mp4" type="video/mp4" />
      </video> */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50" />{" "} */}
        {/* 오버레이 추가 */}
        <div className="relative flex flex-col items-center justify-center h-full  gap-4 ">
          <Image
            src="/pohyo_poster.png"
            alt="pohyo"
            width={1920}
            height={1080}
            className="w-full lg:max-w-3xl object-contain cursor-pointer"
            onClick={handleRegister}
          />
          {/* <Button
            onClick={handleRegister}
            className="text-xl mx-auto px-6 py-3  transition-colors mb-12 mt-8"
          >
            Register for 포효 : POHYO
          </Button> */}
        </div>
      </div>
      <div className="relative w-full snap-start overflow-hidden bg-[#040203] items-center justify-center h-[100dvh] lg:h-[calc(100dvh-56px)] flex">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          height={1080}
          width={1920}
        >
          <source src="/assets/video/s1000rr_video.mp4" type="video/mp4" />
        </video>
        <Image
          src="/s1000rr.png"
          alt="pohyo"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-center"
          onClick={handleRegister}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
        />
        <Button
          onClick={handleRegister}
          className="w-72 h-16 transition-colors z-10 text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          size={"lg"}
        >
          Register for 포효 : POHYO
        </Button>
      </div>
    </div>
  );
};

export default Pohyo;
