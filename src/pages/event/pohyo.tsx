import { Button } from "@/shared/ui/button";
import Image from "next/image";

const Pohyo = () => {
  const handleRegister = () => {
    window.open("https://lu.ma/event/evt-AyGQKkYgASGokWE", "_blank");
  };

  return (
    <div className="relative w-full snap-center overflow-hidden bg-[#040203]">
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
        <Button
          onClick={handleRegister}
          className="text-xl mx-auto px-6 py-3  transition-colors mb-12 mt-8"
        >
          Register for 포효 : POHYO
        </Button>
      </div>
    </div>
  );
};

export default Pohyo;
