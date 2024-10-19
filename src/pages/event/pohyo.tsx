import { Button } from "@/shared/ui/button";
import Image from "next/image";

const Pohyo = () => {
  const handleRegister = () => {
    window.open("https://lu.ma/event/evt-AyGQKkYgASGokWE", "_blank");
  };

  return (
    <div className="relative w-full h-[80dvh] lg:h-[calc(100dvh-56px)] snap-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/video/main/powha_video_3.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />{" "}
      {/* 오버레이 추가 */}
      <div className="relative flex flex-col items-center justify-center h-full gap-8 z-10">
        <Image
          src="/pohyo.jpeg"
          alt="pohyo"
          width={550}
          height={900}
          className="mx-auto"
          onClick={handleRegister}
        />
        <Button
          onClick={handleRegister}
          className="text-xl mx-auto px-6 py-3  transition-colors"
        >
          포효 : POHYO 참가 등록하기
        </Button>
      </div>
    </div>
  );
};

export default Pohyo;
