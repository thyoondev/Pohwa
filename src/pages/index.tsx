import SampleR3f from "../wigets/r3f/Sample";
import { Leva } from "leva";

export default function Home() {
  return (
    <main>
      <div className="h-[80dvh] lg:h-[calc(90dvh-56px)] snap-center overflow-hidden ">
        <SampleR3f />
        {/* <Stats />  */}
        <Leva collapsed hidden />
      </div>
      <div className="h-[calc(100dvh-56px)] w-full bg-[url('/bg_1.png')] bg-cover bg-center p-4 lg:p-14 snap-center shrink-0">
        <div className="w-full h-full  flex justify-center items-center">
          <p className=" text-sm lg:text-md font-archivo">
            포화(Pohwa)는 모터사이클과 스트리트 문화를 결합해 새롭고 대담한
            라이프스타일을 제시하는 브랜드입니다. <br /> <br /> &apos;Break the
            Chain&apos;이라는 슬로건 아래, 기존의 틀을 깨고 자유와 개성을
            추구하는 이들에게 영감을 주며, 감각적인 영상 콘텐츠와 다채로운
            오프라인 이벤트로 독보적인 문화를 만들어갑니다. <br />
            <br />
            포화는 패션, 아트, 디지털을 아우르는 다양한 영역에서 끊임없는 도전을
            이어가며, 스트리트 라이프의 진정한 매력을 경험할 수 있는 새로운
            경험을 제공합니다.
          </p>
        </div>
      </div>
    </main>
  );
}
